import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '@services/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticateResponseInterface} from '@interfaces/authenticateResponse.interface';
import {AuthFacade} from '@facades/auth/authFacade';
import {SuccessResponse} from '@interfaces/responses/success-response';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  tokenWasChecked = false;
  token: string;
  static resetTokenPrefix = 'reset_token_prefix';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private notificationManager: ToastrService,
  ) {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  ngOnInit() {
    this.authService.checkResetPasswordToken(this.token)
      .subscribe(
        (resp: AuthenticateResponseInterface) => {
          console.log(resp);
          if (resp.data.token && resp.data.token.length  > 0) {
            this.tokenWasChecked = true;
            AuthFacade.setToken(resp.data.token, ResetPasswordComponent.resetTokenPrefix);
          }
        }
      );
    this.resetPasswordForm = new FormGroup({
      'password': new FormControl(null, [Validators.required]),
      'confirm_password': new FormControl(null, [Validators.required, this.confirmedPassword.bind(this)]),    });
  }

  confirmedPassword(control: FormControl): {[s: string]: boolean} {
    if (this.resetPasswordForm && this.resetPasswordForm.get('password').value !== this.resetPasswordForm.get('confirm_password').value) {
      return {'confirmedPassword': true};
    } else {
      return null;
    }
  }

  resetPassword() {
    this.authService.resetPassword({
      password: this.resetPasswordForm.get('password').value,
      password_confirmation: this.resetPasswordForm.get('confirm_password').value
    })
      .subscribe(
        (resp: SuccessResponse) => {
          console.log(resp);
          localStorage.removeItem(ResetPasswordComponent.resetTokenPrefix + 'token');
          this.notificationManager.success(resp.success.message ? resp.success.message : 'Password successfully', 'Success' );
          this.router.navigate(['auth/login']);
        }
      )
  }
  public static getTokenPrefix() {
    return this.resetTokenPrefix;
  }
}
