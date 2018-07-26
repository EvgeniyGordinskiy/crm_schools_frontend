import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '@services/auth/auth.service';
import {ResetPasswordComponent} from '@pages/auth/reset-password/reset-password.component';
import {AuthFacade} from '@facades/auth/authFacade';
import {AuthenticateResponseInterface} from '@interfaces/authenticateResponse.interface';
import * as AuthReducer from '@store/auth/reducers';
import {Store} from '@ngrx/store';
import {User} from '@models/user';
import {RefreshAuthState} from '@store/auth/actions';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  token: string;
  user: User;
  tokenWasChecked = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private authStore: Store<AuthReducer.AuthState>,
  ) {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  ngOnInit() {
    this.authStore.subscribe(
      (val) => {
        const auth = val.auth;
        if (auth && auth.user) {
          this.user = auth.user;
        }
      }
    );
    this.authStore.dispatch(new RefreshAuthState());
    this.authService.checkResetPasswordToken(this.token)
      .subscribe(
        (resp: AuthenticateResponseInterface) => {
          console.log(resp);
          if (resp.data.token && resp.data.token.length  > 0) {
            this.tokenWasChecked = true;
            AuthFacade.setToken(resp.data.token, ResetPasswordComponent.resetTokenPrefix);
            console.log(this.user);
            this.authService.sendSms(this.user.email)
              .subscribe(
                resp => {
                  console.log(resp);
                }
              );
          }
        }
      );
  }

}
