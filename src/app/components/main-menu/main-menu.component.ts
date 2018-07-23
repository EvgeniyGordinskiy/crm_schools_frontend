import { Component, OnInit } from '@angular/core';

import * as AuthenticateReducer from '@store/auth/reducers';
import {Store} from '@ngrx/store';
import {Permission} from '@models/permission';
import {UserInterface} from '@interfaces/user.interface';
import {AuthState} from '@store/auth/reducers';
import {PermissionFacade} from '@facades/permission/permissionFacade';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  permissions: {
    key?: [Permission]
  };
  constructor(
    private authStore: Store<AuthenticateReducer.AuthState>
  ) {
    authStore.select('auth').subscribe(
      (val: AuthState) => {
        if (val.user && val.user.permissions) {
          this.permissions = val.user.permissions;
        }
      }
    );
  }

  ngOnInit() {
  }

  checkPermission( modelName, event = '', type = '') {
    return PermissionFacade.checkPermission(this.permissions, modelName, event, type)
  }

}
