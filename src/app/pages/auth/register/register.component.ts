import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {AuthService} from '@services/auth/auth.service';
import * as SpinnerReducer from '@store/spinner/reducers';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {StartSpinner, StopSpinner} from '@store/spinner/actions';
import {SchoolService} from '@services/school/school.service';
import {AuthFacade} from '@facades/auth/authFacade';
import {AuthenticateAction, SignOut, ToggleUsedAuthSocial, UpdateAuthUser} from '@store/auth/actions';
import * as AuthReducer from '@store/auth/reducers';
import {AuthenticateResponseInterface} from '@interfaces/authenticateResponse.interface';
import {AuthService as AuthServiceSocial, FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';
import {AuthState} from '@store/auth/reducers';
import {State} from '@store/auth/reducers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  addASchool = false;
  usedAuthSocial : boolean|string= false;
  rememberMe = false;
  user: {
    name: string|null,
    email: string|null,
    avatar: string|null,
  } = {
    name: null,
    email: null,
    avatar: null
  };

  constructor(
    private router: Router,
    private authFacade: AuthFacade,
    private authService: AuthService,
    private schoolService: SchoolService,
    private socialAuthService: AuthServiceSocial,
    private authStore: Store<AuthReducer.AuthState>,
  private spinnerStore: Store<SpinnerReducer.SpinnerState>
  ) { }

  ngOnInit() {
    this.authStore.subscribe(
      (val) => {
        const auth = val.auth;
        this.usedAuthSocial = auth.usedAuthSocial;
        if (auth) {
          this.user['name'] = auth.user.name && auth.user.name.length > 0 ? auth.user.name : null;
          this.user['email'] = auth.user.email && auth.user.email.length > 0 ? auth.user.email : null;
          this.user['avatar'] = auth.user.avatar && auth.user.avatar.length > 0 ? auth.user.avatar : null;
        }
      }
    );
    this.signupForm = new FormGroup({
      'name': new FormControl(this.user.name, [Validators.required]),
      'phoneNumber': new FormControl(null, [Validators.required, this.checkLimit(11,11)]),
      'avatar': new FormControl(this.user.avatar, ),
      'email': new FormControl(this.user.email, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'confirm_password': new FormControl(null, [Validators.required, this.confirmedPassword.bind(this)]),
    });
  }

  confirmedPassword(control: FormControl): {[s: string]: boolean} {
    if (this.signupForm && this.signupForm.get('password').value !== this.signupForm.get('confirm_password').value) {
      return {'confirmedPassword': true};
    } else {
      return null;
    }
  }

  requiredCustom(control: FormControl): {[s: string]: boolean} {
    if (control.value && control.value.length !== 0) {
      control.markAsTouched();
    }
    if (this.addASchool && control.touched && (!control.value || control.value.length === 0)) {
      return {'required_custom': true};
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
    // this.spinnerStore.dispatch(new StartSpinner());
    // this.authService.register({name: this.signupForm.get('name').value,
    //                           email: this.signupForm.get('email').value,
    //                           role_name: 'admin',
    //                           password: this.signupForm.get('password').value,
    //                           password_confirmation: this.signupForm.get('confirm_password').value})
    //   .subscribe(
    //     (resp: AuthenticateResponseInterface) => {
    //       const schoolName = this.signupForm.get('gym_name').value;
    //       if(schoolName && schoolName.length > 0) {
    //         this.authStore.dispatch(new AuthenticateAction(resp.data.token));
    //         this.schoolService.create({
    //           name: this.signupForm.get('gym_name').value,
    //           description: this.signupForm.get('gym_description').value,
    //           address: this.signupForm.get('gym_address').value
    //         }).subscribe(
    //           resp => console.log(resp)
    //         )
    //       }
    //       this.authStore.dispatch(new SignOut(this.authFacade));
    //       this.spinnerStore.dispatch(new StopSpinner());
    //       this.router.navigate(['/auth/login']);
    //     }
    //   )
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
                this.authStore.dispatch(new UpdateAuthUser({
                  name: user.name,
                  email: user.email,
                  avatar: user.avatar,
                }));
                this.authStore.dispatch(new ToggleUsedAuthSocial({provider: provider}));
              }
            }
          )
      });
  }
}
