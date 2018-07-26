import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@services/auth/auth.service';
import {ToastrService} from 'ngx-toastr';
import {SuccessResponse} from '@interfaces/responses/success-response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationManager: ToastrService,
  ) { }

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  sendEmail() {
    this.authService.sendEmailForResettingPassword( this.forgotPasswordForm.get('email').value, 'uth/resetPassword')
      .subscribe(
        (resp: SuccessResponse) => {
          this.notificationManager.success(resp.success.message ? resp.success.message : 'Password successfully', 'Success' );
          this.router.navigate(['auth/login']);
        }
      )
  }

}
