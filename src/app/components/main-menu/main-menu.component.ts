import { Component, OnInit } from '@angular/core';

import * as AuthenticateReducer from '@store/auth/reducers';
import {Store} from '@ngrx/store';
import {Permission} from '@models/permission';
import {UserInterface} from '@interfacesuser.interface';
import {AuthState} from '@store/auth/reducers';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  permissions: {
    key: [Permission]
  };
  constructor(
    private authStore: Store<AuthenticateReducer.AuthState>
  ) {
    authStore.select('auth').subscribe(
      (val: AuthState) => {
        console.log(val);
        if (val.user && val.user.permissions) {
          this.permissions = val.user.permissions;
        }
      }
    );
  }

  ngOnInit() {
    console.log(this.permissions);
  }

}
