import {Component, OnInit} from '@angular/core';

// @ngrx
import { Store } from '@ngrx/store';

// reducers
import * as AuthenticateReducer from '@store/auth/reducers';
import {Permission} from '@models/permission';
import {PermissionService} from '@services/permission/permission.service';
import {PermissionFacade} from '@facadespermission/permissionFacade';
import {RolePermissionInterface} from '@interfacesrolePermission.interface';
import {RoleService} from '@services/role/role.service';
import {RoleInterface} from '@interfacesrole.interface';

@Component({
  selector: 'app-permission-page',
  templateUrl: './permission-page.component.html',
  styleUrls: ['./permission-page.component.scss']
})
export class PermissionPageComponent implements OnInit {
  currentNavItem = 'page1';
  status = 'status';
  permissions: { key: [Permission]};
  rolesPermissions = [];
  roles: [RoleInterface];

  constructor(
    private authStore: Store<AuthenticateReducer.AuthState>,
    private roleService: RoleService,
    private permissionService: PermissionService
  ) {
  }

  ngOnInit() {
    this.permissionService.getAll().subscribe(
      (resp: { data: {key: [Permission]}}) => {this.permissions = PermissionFacade.groupByModelName(resp.data);
        console.log(this.permissions);
        },
    );
    this.permissionService.getRolesPermissions().subscribe(
      (resp: {data: [RolePermissionInterface]}) => {this.rolesPermissions = resp.data;
        console.log(this.rolesPermissions);
      });
    this.roleService.getAll().subscribe(
      (resp: {data: [RoleInterface]}) => {this.roles = resp.data;
        console.log(this.roles)}
    );
  }

  getKeys() {
    console.log(this.permissions, '*********');
    return Object.keys(this.permissions);
  }
}
