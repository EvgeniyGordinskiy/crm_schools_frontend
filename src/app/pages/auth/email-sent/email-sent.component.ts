import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as AuthReducer from '@store/auth/reducers';
import {AuthService} from '@services/auth/auth.service';
import {User} from '@models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.scss']
})

export class EmailSentComponent implements OnInit {
  user: User;
  constructor(
    private router: Router,
    private authStore: Store<AuthReducer.AuthState>,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authStore.subscribe(
      (val) => {
        const auth = val.auth;
        if (auth && auth.user) {
          this.user = auth.user;
        }
      }
    );
    this.resendEmail();
  }

  resendEmail() {
    let redirect = 'auth/login';
    if(this.user.phoneNumberVerified === false || this.user.paymentSettingVerified === false || !this.user.schools.length ) {
      this.router.navigate(['auth/setup']);
    }
    this.authService.sendEmail(this.user.email, redirect)
      .subscribe(
        resp => {
          console.log(resp);
        }
      )
  }

}
