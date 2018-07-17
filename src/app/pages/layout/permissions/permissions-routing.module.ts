import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PermissionPageComponent} from '@pages/layout/permissions/permission-page/permission-page.component';

const routes: Routes = [
  {
    path: '', component: PermissionPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PermissionsRoutingModule { }
