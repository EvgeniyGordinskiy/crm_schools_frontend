import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@services/auth/auth.service';
import * as SpinnerReducer from '@store/spinner/reducers';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {StartSpinner, StopSpinner} from '@store/spinner/actions';
import {SchoolService} from '@services/school/school.service';
import {AuthFacade} from '@facades/auth/authFacade';
import {AuthenticateAction, SignOut} from '@store/auth/actions';
import * as AuthReducer from '@store/auth/reducers';
import {AuthenticateResponseInterface} from '@interfaces/authenticateResponse.interface';

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
    private authStore: Store<AuthReducer.AuthState>,
  private spinnerStore: Store<SpinnerReducer.SpinnerState>
  ) { }

  ngOnInit() {
    this.authStore.select('auth').subscribe(
      (val) => {
        this.usedAuthSocial = val.usedAuthSocial;
        if (val.user) {
          this.user['name'] = val.user.name && val.user.name.length > 0 ? val.user.name : null;
          this.user['email'] = val.user.email && val.user.email.length > 0 ? val.user.email : null;
          this.user['avatar'] = val.user.avatar && val.user.avatar.length > 0 ? val.user.avatar : null;
        }
      }
    );
    this.signupForm = new FormGroup({
      'name': new FormControl(this.user.name, [Validators.required]),
      'phoneNumber': new FormControl(null, [Validators.required]),
      'avatar': new FormControl(this.user.avatar, ),
      'email': new FormControl(this.user.email, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'confirm_password': new FormControl(null, [Validators.required, this.confirmedPassword.bind(this)]),
      'gym_name': new FormControl(null, [this.requiredCustom.bind(this)]),
      'gym_description': new FormControl(null),
      'gym_address': new FormControl(null),
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

  onClickedCheckBox(val) {
    if (!val.checked) {
      this.signupForm.get('gym_name').reset();
    }
    this.addASchool = !this.addASchool
  }

  register() {
    console.log(this.signupForm);
    this.spinnerStore.dispatch(new StartSpinner());
    this.authService.register({name: this.signupForm.get('name').value,
                              email: this.signupForm.get('email').value,
                              role_name: 'admin',
                              password: this.signupForm.get('password').value,
                              password_confirmation: this.signupForm.get('confirm_password').value})
      .subscribe(
        (resp: AuthenticateResponseInterface) => {
          const schoolName = this.signupForm.get('gym_name').value;
          if(schoolName && schoolName.length > 0) {
            this.authStore.dispatch(new AuthenticateAction(resp.data.token));
            this.schoolService.create({
              name: this.signupForm.get('gym_name').value,
              description: this.signupForm.get('gym_description').value,
              address: this.signupForm.get('gym_address').value
            }).subscribe(
              resp => console.log(resp)
            )
          }
          this.authStore.dispatch(new SignOut(this.authFacade));
          this.spinnerStore.dispatch(new StopSpinner());
          this.router.navigate(['/auth/login']);
        }
      )
  }
}
