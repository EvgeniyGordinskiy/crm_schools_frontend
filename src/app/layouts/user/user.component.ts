import { Component, OnInit } from '@angular/core';

import * as AuthReducer from '@store/auth/reducers';
import {AuthState} from '@store/auth/reducers';
import {Store} from '@ngrx/store';
import {SignOut} from '@store/auth/actions';
import {AuthFacade} from '@app/facades/auth/authFacade';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  email: string;
  name: string;
  constructor(
    private authFacade: AuthFacade,
    private authStore: Store<AuthReducer.AuthState>
  ) { }

  ngOnInit() {
    this.authStore.select('auth').subscribe(
      (val) => {
        console.log(val);
        if (val.user) {
          this.name = val.user.name;
          this.email = val.user.email;
        }
      }
    );
  }

  onLogout() {
    this.authStore.dispatch(new SignOut(this.authFacade));
  }

}
