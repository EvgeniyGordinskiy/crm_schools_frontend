import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '@services/auth/auth.service';
import {ResetPasswordComponent} from '@pages/auth/reset-password/reset-password.component';
import {AuthFacade} from '@facades/auth/authFacade';
import {AuthenticateResponseInterface} from '@interfaces/authenticateResponse.interface';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  token:string;
  tokenWasChecked = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
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
  }

}
