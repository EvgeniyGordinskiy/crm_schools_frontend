import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// @ngrx
import { Store } from '@ngrx/store';

// rxjs
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import * as SpinnerReducer from '@store/spinner/reducers';
import {StartSpinner} from '@store/spinner/actions';

@Injectable()
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private store: Store<SpinnerReducer.SpinnerState>
  ) { }

  login({email, password, rememberMe}) {
    this.store.dispatch(new StartSpinner());
    return  this.httpClient.post('auth', {email, password, rememberMe});
  }

  register({name, email, password, password_confirmation}) {
    this.store.dispatch(new StartSpinner());
    return  this.httpClient.post('auth/register', {name, email, password, password_confirmation});
  }

  sendEmailForResettingPassword(email: string) {
    // this.store.dispatch(new StartSpinner());
    return  this.httpClient.post('password/change', {email: email});
  }

  resetPassword({password, password_confirmation}) {
    // this.store.dispatch(new StartSpinner());
    return  this.httpClient.post('password/reset', {password, password_confirmation});
  }

  checkResetPasswordToken(token: string) {
    // this.store.dispatch(new StartSpinner());
    return  this.httpClient.post('password/checkToken', {token: token});
  }
}
