import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {AuthService} from '@services/auth/auth.service';
import * as SpinnerReducer from '@store/spinner/reducers';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {StartSpinner, StopSpinner} from '@store/spinner/actions';
import {SchoolService} from '@services/school/school.service';
import {AuthFacade} from '@facades/auth/authFacade';
import {
  AuthenticateAction,
  AuthenticatedSuccessAction,
  RefreshAuthState,
  SignOut,
  ToggleUsedAuthSocial,
  UpdateAuthUser
} from '@store/auth/actions';
import * as AuthReducer from '@store/auth/reducers';
import {AuthenticateResponseInterface} from '@interfaces/authenticateResponse.interface';
import {AuthService as AuthServiceSocial, FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';
import {AuthState} from '@store/auth/reducers';
import {State} from '@store/auth/reducers';
import {User} from '@models/user';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorResponse} from '@interfaces/responses/error-response';
import {AccountServiceResponseInterface} from '@interfaces/accountServiceResponse.interface';
import {PermissionFacade} from '@facades/permission/permissionFacade';
import {ResetPasswordComponent} from '@pages/auth/reset-password/reset-password.component';
import {AccountService} from '@services/account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  addASchool = false;
  usedAuthSocial: boolean|string = false;
  rememberMe = false;
  user: User;

  constructor(
    private router: Router,
    private authFacade: AuthFacade,
    private authService: AuthService,
    private schoolService: SchoolService,
    private accountService: AccountService,
    private socialAuthService: AuthServiceSocial,
    private authStore: Store<AuthReducer.AuthState>,
  private spinnerStore: Store<SpinnerReducer.SpinnerState>
  ) { }

  ngOnInit() {
    this.user = new User();
    this.signupForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'phoneNumber': new FormControl(null, [Validators.required, this.checkLimit(12, 12)]),
      'avatar': new FormControl(this.user.avatar),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'confirm_password': new FormControl(null, [Validators.required, this.confirmedPassword.bind(this)]),
    });
    this.authStore.subscribe(
      (val) => {
        const auth = val.auth;
        if (auth && auth.user) {
          this.usedAuthSocial = auth.user.usedAuthSocial;
          this.user['provider_name'] = auth.user.provider_name && auth.user.provider_name.length > 0 ? auth.user.provider_name : null;
          this.user['provider_id'] = auth.user.provider_id && auth.user.provider_id.length > 0 ? auth.user.provider_id : null;
          if ( auth.user.email && auth.user.email.length > 0 &&  auth.user.email !== null) {
            this.user['email'] = auth.user.email;
            this.signupForm.get('email').setValue(this.user['email']);
          }
          if ( auth.user.name && auth.user.name.length > 0 &&  auth.user.name !== null) {
            this.user['name'] = auth.user.name;
            this.signupForm.get('name').setValue(this.user['name']);
          }
          this.user['avatar'] = auth.user.avatar && auth.user.avatar.length > 0 ? auth.user.avatar : null;
          this.signupForm.get('avatar').setValue(this.user['avatar']);
        }
      }
    );
  }

  confirmedPassword(control: FormControl): {[s: string]: boolean} {
    console.log(this.signupForm);
    if (this.signupForm && this.signupForm.get('password').value !== this.signupForm.get('confirm_password').value) {
      return {'confirmedPassword': true};
    } else {
      return null;
    }
  }

  checkLimit(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value !== null && (c.value.length < min || c.value.length > max)) {
        return {'range': true};
      }
      return null;
    };
  }

  register() {
    console.log(this.signupForm);
    let formBody = {
      name: this.signupForm.get('name').value,
      avatar: this.signupForm.get('avatar').value,
      email: this.signupForm.get('email').value,
      phone: '+' + this.signupForm.get('phoneNumber').value,
      fromSocial:{
        provider_name: '',
        provider_id: '',
      },
      role_name: 'admin',
      password: this.signupForm.get('password').value,
      password_confirmation: this.signupForm.get('confirm_password').value
    };
    if (this.usedAuthSocial) {
      formBody['fromSocial']['provider_name'] = this.user.provider_name;
      formBody['fromSocial']['provider_id'] = this.user.provider_id;

    }
    this.spinnerStore.dispatch(new StartSpinner());
    this.authService.register(formBody)
      .subscribe(
        (resp: AuthenticateResponseInterface) => {
          // this.authStore.dispatch(new SignOut(this.authFacade));
          this.authStore.dispatch(new UpdateAuthUser({
            email: formBody.email,
            phone: formBody.phone,
            registerComplete: true,
          }));
          AuthFacade.setUser(this.user);
          this.router.navigate(['/auth/emailSent']);
          this.spinnerStore.dispatch(new StopSpinner());
        },
      (err: ErrorResponse) => {
          console.log(err);
          Object.keys(err.error.errors).map(item => {
            if (item !== 'avatar') {
              this.signupForm.controls[item].setErrors({'apiValidate': err.error.errors[item]});
            }
          });
        }
      );
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
            (resp: AuthenticateResponseInterface) => {
              console.log(resp);
              if (resp.data.status && resp.data.status === 206) {
                const user = resp.data.authUser.data;
                this.authStore.dispatch(new UpdateAuthUser({
                  name: user.name,
                  email: user.email,
                  avatar: user.avatar,
                  provider_id: user.id,
                  provider_name: provider,
                }));
                this.authStore.dispatch(new ToggleUsedAuthSocial({provider: provider}));
              } else {
                this.authenticate(resp.data.token);
              }
            }
          );
      });
  }

  private authenticate(token) {
    console.log(token);
    this.authStore.dispatch(new AuthenticateAction(token));
    this.accountService.getAccount().subscribe(
      (response: AccountServiceResponseInterface) => {
        const permissions = PermissionFacade.groupByModelName(response.data.permissions);
        const user =  this.authFacade.createUser(response, permissions);
        console.log(user, 'authenticate login');
        this.authStore.dispatch(new UpdateAuthUser(user));
        if (user.emailVerified === false) {
          this.router.navigate(['auth/emailSent']);
        } else if (user.phoneNumberVerified === false || user.paymentSettingVerified === false || !user.schools.length ) {
          AuthFacade.setToken(token, ResetPasswordComponent.resetTokenPrefix);
          this.router.navigate(['auth/setup']);
        } else {
          this.authStore.dispatch(new AuthenticatedSuccessAction({authenticated: true, user: user}));
          this.authFacade.checkAuthStatusAndRedirect();
        }
      },
      error => {
        console.log(error);
      }
    );

  }
}
