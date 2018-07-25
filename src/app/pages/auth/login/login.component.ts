import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@services/auth/auth.service';

// @ngrx
import { Store } from '@ngrx/store';

// rxjs
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';

// actions
import {AuthenticateAction, AuthenticatedSuccessAction, ToggleUsedAuthSocial, UpdateAuthUser} from '@store/auth/actions';
import * as AuthenticateReducer from '@store/auth/reducers';

// reducers
import {AccountService} from '@services/account/account.service';
import {AuthenticateResponseInterface} from '@app/interfaces/authenticateResponse.interface';
import * as SpinnerReducer from '@store/spinner/reducers';
import {StopSpinner} from '@store/spinner/actions';
import {User} from '@models/user';
import {AccountServiceResponseInterface} from '@app/interfaces/accountServiceResponse.interface';
import {AuthFacade} from '@app/facades/auth/authFacade';
import {PermissionFacade} from '@facades/permission/permissionFacade';
import {AuthService as AuthServiceSocial, FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  signinForm: FormGroup;
  rememberMe = false;
  /**
   * Component state.
   * @type {boolean}
   */
  private alive = true;
  constructor(
    private router: Router,
    private authFacade: AuthFacade,
    private authService: AuthService,
    private socialAuthService: AuthServiceSocial,
    private accountService: AccountService,
    private store: Store<AuthenticateReducer.AuthState>,
    private spinnerStore: Store<SpinnerReducer.SpinnerState>

  ) {
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'password': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  /**
   *  Lifecycle hook that is called when a directive, pipe or service is destroyed.
   * @method ngOnDestroy
   */
  public ngOnDestroy() {
    this.alive = false;
  }

  login(): void {
    this.authService.login({email: this.signinForm.value.email, password: this.signinForm.value.password, rememberMe: this.rememberMe})
      .subscribe(
        (resp: AuthenticateResponseInterface) => {
          if (resp.data.token) {
            this.store.dispatch(new AuthenticateAction(resp.data.token));
            this.accountService.getAccount().subscribe(
              (response: AccountServiceResponseInterface) => {
                const permissions = PermissionFacade.groupByModelName(response.data.permissions);
                const user = new User(response.data);
                if (permissions) {
                  user.permissions = permissions;
                }
                  this.store.dispatch(new AuthenticatedSuccessAction({authenticated: true, user: user}));
                  this.authFacade.checkAuthStatusAndRedirect();
              },
              error => {
                console.log(error);
              }
            );
          }
          this.spinnerStore.dispatch(new StopSpinner());
        });
  }

  loginBySocialAcc(provider: string) {
    let socialPlatformProvider;
    if (provider === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (provider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
    resp => {
      this.authService.loginBySocialAcc(provider, resp.token)
        .subscribe(
          (resp: {data: {status: number, authUser: {name: string, email: string, avatar: string}}}) => {
            console.log(resp);
            if(resp.data.status && resp.data.status === 206) {
              const user = resp.data.authUser;
               this.store.dispatch(new UpdateAuthUser({
                 name: user.name,
                 email: user.email,
                 avatar: user.avatar,
               }));
              this.store.dispatch(new ToggleUsedAuthSocial({provider: provider}));
              this.router.navigate(['auth/register']);
            }
          }
        )
    });
  }

}
