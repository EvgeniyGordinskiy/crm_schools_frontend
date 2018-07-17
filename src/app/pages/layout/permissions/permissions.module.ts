import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionPageComponent } from './permission-page/permission-page.component';
import {PermissionsRoutingModule} from '@pages/layout/permissions/permissions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PermissionsRoutingModule
  ],
  declarations: [PermissionPageComponent]
})
export class PermissionsModule { }
