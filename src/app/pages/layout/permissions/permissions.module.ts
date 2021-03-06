import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionPageComponent } from './permission-page/permission-page.component';
import {PermissionsRoutingModule} from '@pages/layout/permissions/permissions-routing.module';
import {PermissionService} from '@services/permission/permission.service';
import {RoleService} from '@services/role/role.service';
import {MatSelectModule, MatTabsModule} from '@angular/material';
import {SharedModule} from '@sharedModules/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    PermissionsRoutingModule,
    MatTabsModule,
    MatSelectModule,
    SharedModule,
  ],
  declarations: [PermissionPageComponent],
  providers: [PermissionService, RoleService]
})
export class PermissionsModule { }
