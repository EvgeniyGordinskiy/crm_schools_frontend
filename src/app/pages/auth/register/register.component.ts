import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
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
import {PhoneNumber} from '@models/phoneNumber';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  addASchool = false;
  fieldWithError = '';
  phoneNumber: PhoneNumber;
  usedAuthSocial: boolean|string = false;
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
    this.phoneNumber = new PhoneNumber();

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
      'avatar': new FormControl(this.user.avatar, ),
      'email': new FormControl(this.user.email, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'confirm_password': new FormControl(null, [Validators.required, this.confirmedPassword.bind(this)]),
      'phone': new FormGroup({
        'country': new FormControl(...this.validateMinMax(1, 2)),
        'area': new FormControl(...this.validateMinMax(3, 3)),
        'prefix': new FormControl(...this.validateMinMax(3, 3)),
        'line': new FormControl(...this.validateMinMax(4, 4)),
      })
    });
  }

  confirmedPassword(control: FormControl): {[s: string]: boolean} {
    if (this.signupForm && this.signupForm.get('password').value !== this.signupForm.get('confirm_password').value) {
      return {'confirmedPassword': true};
    } else {
      return null;
    }
  }

  validateMinMax(min, max) {
    return [null, [
      this.checkLimit(min, max),
      Validators.pattern('[0-9]+')
    ]];
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
    this.spinnerStore.dispatch(new StartSpinner());
    this.authService.register({name: this.signupForm.get('name').value,
                              email: this.signupForm.get('email').value,
                              role_name: 'admin',
                              password: this.signupForm.get('password').value,
                              password_confirmation: this.signupForm.get('confirm_password').value})
      .subscribe(
        (resp: AuthenticateResponseInterface) => {
          const schoolName = this.signupForm.get('gym_name').value;
          if (schoolName && schoolName.length > 0) {
            this.authStore.dispatch(new AuthenticateAction(resp.data.token));
            this.schoolService.create({
              name: this.signupForm.get('gym_name').value,
              description: this.signupForm.get('gym_description').value,
              address: this.signupForm.get('gym_address').value
            }).subscribe(
              resp => console.log(resp)
            );
          }
          this.authStore.dispatch(new SignOut(this.authFacade));
          this.spinnerStore.dispatch(new StopSpinner());
          this.router.navigate(['/auth/login']);
        }
      );
  }
  numberOnly(event,  nameField: string): boolean {
    const phone = this.signupForm.controls.phone as FormGroup;
    let hasError = false;
    Object.keys(phone.controls).map((item) => {
      if (phone.controls[item].invalid && phone.controls[item].touched) {
        this.fieldWithError = item;
        hasError = true;
      }
    });
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode >= 97 && charCode <= 105)  || hasError) {
      return nameField === this.fieldWithError;
    }
    return hasError === false;

  }
}
