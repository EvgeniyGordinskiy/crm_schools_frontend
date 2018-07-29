import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '@services/auth/auth.service';
import {ResetPasswordComponent} from '@pages/auth/reset-password/reset-password.component';
import {AuthFacade} from '@facades/auth/authFacade';
import {AuthenticateResponseInterface} from '@interfaces/authenticateResponse.interface';
import * as AuthReducer from '@store/auth/reducers';
import {Store} from '@ngrx/store';
import {User} from '@models/user';
import {UpdateAuthUser} from '@store/auth/actions';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {PaymentService} from '@services/payment/payment.service';
import {SchoolService} from '@services/school/school.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  token: string;
  user: User;
  gyms = ['1', '2'];
  tokenWasChecked = false;
  codeWasChecked = false;
  paymentSettingVerified = false;
  hasSchool = false;
  paymentInformation = false;
  setUpForm: FormGroup;
  currentIndex = 0;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authFacade: AuthFacade,
    private authService: AuthService,
    private schoolService: SchoolService,
    private paymentService: PaymentService,
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
    this.identificateRegistration();
    this.setUpForm = new FormGroup({
      'code': new FormControl(null, [Validators.required]),
      'card_number': new FormControl(null, [Validators.required]),
      'exp_date': new FormControl(null, [Validators.required]),
      'cvv': new FormControl(null, [Validators.required]),
      'gyms':  this.fb.array([])
    });
    this.addGym();
    console.log(this.setUpForm);
  }

  checkLimit(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value !== null && (c.value.length < min || c.value.length > max)) {
        return {'range': true};
      }
      return null;
    };
  }

  sendSms() {
    this.codeWasChecked = false;
    this.authService.sendSms(this.user.email)
      .subscribe(
        resp => {
          console.log(resp);
        },
      );
  }

  checkTokenThanNext() {
    if (!this.codeWasChecked) {
      this.authService.checkResetPasswordToken(this.setUpForm.get('code').value)
        .subscribe(
          (resp: AuthenticateResponseInterface) => {
            console.log(resp);
            if (resp.data.token && resp.data.token.length > 0) {
              AuthFacade.setToken(resp.data.token, ResetPasswordComponent.resetTokenPrefix);
              const tmpUser = this.authFacade.createUser(resp.data.authUser);
              if (tmpUser.email === this.user.email && tmpUser.phone === this.user.phone) {
                this.codeWasChecked = true;
                this.authStore.dispatch(new UpdateAuthUser(tmpUser));
                this.currentIndex++;
              } else {
                this.setUpForm.get('code').setErrors({wrongCode: true});
              }
            } else {
              this.setUpForm.get('code').setErrors({wrongCode: true});
            }
          },
          err => {
            this.setUpForm.get('code').setErrors({wrongCode: true});
            console.log(this.setUpForm);
          }
        );

    } else {
      this.currentIndex++;
    }
  }

  savePaymentSettings() {
    if (!this.paymentSettingVerified) {
      this.paymentService.savePaymentsSettings({
        card_number: this.setUpForm.get('card_number').value,
        exp_date: this.setUpForm.get('exp_date').value,
        cvv: this.setUpForm.get('cvv').value,
      }).subscribe(
        (resp: AuthenticateResponseInterface) => {
          if (resp.data.token && resp.data.token.length > 0) {
            AuthFacade.setToken(resp.data.token, ResetPasswordComponent.resetTokenPrefix);
          } else {
            this.router.navigate(['/auth/login']);
          }
          const tmpUser = this.authFacade.createUser(resp.data.authUser);
          if (tmpUser.email === this.user.email && tmpUser.phone === this.user.phone) {
            this.paymentSettingVerified = true;
            this.currentIndex++;
            this.authStore.dispatch(new UpdateAuthUser(tmpUser));
          }
          this.paymentSettingVerified = false;
        }
      );
    } else {
      this.currentIndex++;
    }
  }

  saveGyms() {
    const gyms = this.setUpForm.get('gyms')['controls'];
    gyms.map(gym => {
      console.log(gym);
      this.schoolService.create({
        name: gym.get('gym_name').value,
        address: gym.get('gym_address').value,
        phone: gym.get('gym_phone').value
      }).subscribe(
        (resp: {data}) => {
          this.authStore.dispatch(new UpdateAuthUser({schools: resp.data}));
        }
      );
    });
    this.router.navigate(['auth/login']);
  }

  prev(event) {
    this.currentIndex--;
  }

  identificateRegistration() {
    if (this.user && !this.user.emailVerified && this.token && !this.tokenWasChecked) {
      this.checkEmailsToken();
      this.currentIndex = 0;
    } else {
      this.tokenWasChecked = true;
      if (this.user.phoneNumberVerified === true) {
        this.codeWasChecked = true;
        this.currentIndex = 1;
      } else {
        this.currentIndex = 0;
        this.sendSms();
      }
      if (this.user.paymentSettingVerified === true && this.user.phoneNumberVerified === true) {
        this.paymentSettingVerified = true;
        this.currentIndex = 2;
      }

      if (this.user.schools && this.user.schools.length > 0) {
        this.hasSchool = true;
      }

      if (this.hasSchool === true && this.codeWasChecked === true && this.tokenWasChecked === true && this.paymentInformation === true) {
        this.router.navigate(['auth/login']);
      }
    }
  }

  private checkEmailsToken() {
    this.authService.checkResetPasswordToken(this.token)
      .subscribe(
        (resp: AuthenticateResponseInterface) => {
          console.log(resp);
          if (resp.data.token && resp.data.token.length > 0) {
            AuthFacade.setToken(resp.data.token, ResetPasswordComponent.resetTokenPrefix);
            this.user = this.authFacade.createUser(resp.data.authUser);
            this.authStore.dispatch(new UpdateAuthUser(this.user));
            this.tokenWasChecked = true;
            this.identificateRegistration();
            console.log(this.user);
          } else {
            this.router.navigate(['/auth/login']);
          }
        },
        err => this.router.navigate(['/auth/login'])
      );
  }

  addGym() {
    if ( this.setUpForm.get('gyms')['controls'] &&  this.setUpForm.get('gyms')['controls'].length < 4) {
    this.setUpForm.get('gyms')['controls'].push(  this.fb.group({
      'gym_name': new FormControl(null, [Validators.required]),
      'gym_address': new FormControl(null, [Validators.required]),
      'gym_phone': new FormControl(null, [Validators.required,  this.checkLimit(12, 12)]),
    }));
    }
  }
}
