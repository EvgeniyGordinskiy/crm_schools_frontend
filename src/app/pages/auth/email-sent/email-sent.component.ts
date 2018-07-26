import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as AuthReducer from '@store/auth/reducers';
import {AuthService} from '@services/auth/auth.service';

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.scss']
})

export class EmailSentComponent implements OnInit {
  email: string;
  constructor(
    private authStore: Store<AuthReducer.AuthState>,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authStore.subscribe(
      (val) => {
        const auth = val.auth;
        if (auth && auth.user) {
          this.email = auth.user.email;
        }
      }
    );
  }

  resendEmail() {
    this.authService.sendEmail(this.email, 'auth/setup')
      .subscribe(
        resp => {
          console.log(resp);
        }
      )
  }

}
