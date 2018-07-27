import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '@services/auth/auth.service';
import {ResetPasswordComponent} from '@pages/auth/reset-password/reset-password.component';
import {AuthFacade} from '@facades/auth/authFacade';
import {AuthenticateResponseInterface} from '@interfaces/authenticateResponse.interface';
import * as AuthReducer from '@store/auth/reducers';
import {Store} from '@ngrx/store';
import {User} from '@models/user';
import {RefreshAuthState, UpdateAuthUser} from '@store/auth/actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PaymentService} from '@services/payment/payment.service';
import {AccountServiceResponseInterface} from '@interfaces/accountServiceResponse.interface';

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
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private paymentService: PaymentService,
    private authFacade: AuthFacade,
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
          console.log(this.user, 'subsc');
          this.identificateRegistration();
        }
      }
    );

    if (this.user && !this.user.emailVerified && this.token) {
      this.checkEmailsToken();
      this.currentIndex = 0;
    } else {
      this.tokenWasChecked = true;
    }
    this.setUpForm = new FormGroup({
      'code': new FormControl(null, [Validators.required]),
      'card_number': new FormControl(null, [Validators.required]),
      'exp_date': new FormControl(null, [Validators.required]),
      'cvv': new FormControl(null, [Validators.required]),
      'gym_name': new FormControl(null, [Validators.required]),
      'gym_address': new FormControl(null, [Validators.required]),
      'gym_phone': new FormControl(null, [Validators.required]),
    })
  }

  sendSms() {
    this.codeWasChecked = false;
    this.authService.sendSms(this.user.email)
      .subscribe(
        resp => {
          console.log(resp);
        }
      );
  }

  checkTokenThanNext() {
    if (!this.codeWasChecked) {
      this.authService.checkResetPasswordToken(this.setUpForm.get('code').value)
        .subscribe(
          (resp: AuthenticateResponseInterface) => {
            console.log(resp);
            if (resp.data.token && resp.data.token.length > 0) {
              const tmpUser = this.authFacade.createUser(resp.data.authUser);
              if (tmpUser.email === this.user.email && tmpUser.phone === this.user.phone) {
                this.codeWasChecked = true;
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
        (resp: AccountServiceResponseInterface) => {
          const tmpUser = this.authFacade.createUser(resp);
          if (tmpUser.email === this.user.email && tmpUser.phone === this.user.phone) {
            this.paymentSettingVerified = true;
            this.currentIndex++;
            this.authStore.dispatch(new UpdateAuthUser(tmpUser));
            AuthFacade.setUser(tmpUser);
          }
          this.paymentSettingVerified = false;
          this.currentIndex++;
        }
      )
    } else {
      this.currentIndex++;
    }
  };

  saveGyms() {
    console.log(this.setUpForm);
  }

  prev(event) {
    this.currentIndex--;
  }

  identificateRegistration() {
    if (this.user.phoneNumberVerified === true) {
      this.codeWasChecked = true;
      this.currentIndex = 1;
    } else {
      this.currentIndex = 0;
      this.sendSms();
    }

    if (this.user.paymentSettingVerified === true) {
      this.paymentSettingVerified = true;
      this.currentIndex = 2;
    }

    if (this.user.schools.length > 0) {
      this.hasSchool = true;
    }

    if (this.hasSchool === true && this.codeWasChecked === true && this.tokenWasChecked === true && this.paymentInformation === true) {
      this.router.navigate(['auth/login']);
    }
  }

  private checkEmailsToken() {
    this.authService.checkResetPasswordToken(this.token)
      .subscribe(
        (resp: AuthenticateResponseInterface) => {
          console.log(resp);
          if (resp.data.token && resp.data.token.length > 0) {
            this.tokenWasChecked = true;
            AuthFacade.setToken(resp.data.token, ResetPasswordComponent.resetTokenPrefix);
            this.user = this.authFacade.createUser(resp.data.authUser);
            this.identificateRegistration();
            console.log(this.user);
          } else {
            this.router.navigate(['/auth/login']);
          }
        },
        err => this.router.navigate(['/auth/login'])
      );
  }
}
