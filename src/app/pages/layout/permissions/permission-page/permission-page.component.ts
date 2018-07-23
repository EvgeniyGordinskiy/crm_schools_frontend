import {Component, OnInit} from '@angular/core';

// @ngrx
import { Store } from '@ngrx/store';

// reducers
import * as AuthenticateReducer from '@store/auth/reducers';
import {Permission} from '@models/permission';
import {PermissionService} from '@services/permission/permission.service';
import {PermissionFacade} from '@facades/permission/permissionFacade';
import {RolePermissionInterface} from '@interfaces/rolePermission.interface';
import {RoleService} from '@services/role/role.service';
import {RoleInterface} from '@interfaces/role.interface';
import {FormControl, FormGroup} from '@angular/forms';
import {isNumber} from 'util';
import * as SpinnerReducer from '@store/spinner/reducers';
import {StartSpinner, StopSpinner} from '@store/spinner/actions';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-permission-page',
  templateUrl: './permission-page.component.html',
  styleUrls: ['./permission-page.component.scss']
})
export class PermissionPageComponent implements OnInit {
  permissions: { key?: [Permission]};
  rolesPermissions = [];
  roles: [RoleInterface];
  permissionForm: FormGroup;
  resultRolesPermissions = [];

  constructor(
    private authStore: Store<AuthenticateReducer.AuthState>,
    private spinnerStore: Store<SpinnerReducer.SpinnerState>,
    private roleService: RoleService,
    private permissionService: PermissionService,
    private notificationManager: ToastrService,
  ) {
  }

  ngOnInit() {
    this.spinnerStore.dispatch(new StartSpinner());
    this.permissionService.getAll().subscribe(
      (resp: { data: {key: [Permission]}}) => {
        this.permissions = PermissionFacade.groupByModelName(resp.data);
        this.assignData();
      });
    this.getRolesPermission();
    this.getAllRoles();
  }

  getKeys() {
    return Object.keys(this.permissions);
  }

  savePermissions() {
    this.spinnerStore.dispatch(new StartSpinner());
    for (let roleKey of this.roles) {
      if (!this.resultRolesPermissions[roleKey.name]) {
        this.resultRolesPermissions[roleKey.name] = [];
      }
      const permissionsOfRole = this.permissionForm.get(roleKey.name).value;
      for( let key of Object.keys(permissionsOfRole)) {
        if (permissionsOfRole[key]) {
          this.resultRolesPermissions[roleKey.name] = this.resultRolesPermissions[roleKey.name]
            .concat(permissionsOfRole[key].filter(item => {
            return isNumber(item);
          }));
        }
      }
    }
    this.permissionService.update(this.resultRolesPermissions).subscribe(
      resp => {
        this.spinnerStore.dispatch(new StopSpinner());
        this.notificationManager.success('Roles permissions updated successfully', 'Success');
      }
    );
    this.resultRolesPermissions = [];
  }

  getRolesPermission() {
    this.permissionService.getRolesPermissions().subscribe(
      (resp: {data: [RolePermissionInterface]}) => {
        resp.data.map((item) => {
          if (!this.rolesPermissions[item.role]) {
            this.rolesPermissions[item.role] = [];
          }
          if (!this.rolesPermissions[item.role][item.model_name]) {
            this.rolesPermissions[item.role][item.model_name] = [];
          }
          this.rolesPermissions[item.role][item.model_name].push(item.permission_id);
        });
      });
  }

  async getAllRoles() {
   await this.roleService.getAll().subscribe(
      (resp: {data: [RoleInterface]}) => {
        this.roles = resp.data;
      }
    );
  }

  assignData() {
    let formGroups = {};
    for (let roleKey of this.roles) {
      let tmpControll = {};
      for (let modelName of this.getKeys()) {
        let initialState = [];
        if (this.rolesPermissions[roleKey.name] && this.rolesPermissions[roleKey.name][modelName]) {
          initialState = this.rolesPermissions[roleKey.name][modelName];
        }
        tmpControll[modelName] = new FormControl(initialState);
      }
      formGroups[roleKey.name] = new FormGroup(tmpControll);
    }
    this.permissionForm = new FormGroup(formGroups);
    this.spinnerStore.dispatch(new StopSpinner());
  }
}
