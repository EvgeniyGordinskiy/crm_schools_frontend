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

  login({email, password}) {
    this.store.dispatch(new StartSpinner());
    return  this.httpClient.post('auth', {email, password});
  }
}
