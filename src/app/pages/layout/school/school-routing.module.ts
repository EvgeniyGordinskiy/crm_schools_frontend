import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateSchoolComponent} from '@pages/layout/school/create-school/create-school.component';

const routes: Routes = [
  {
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
export class SchoolRoutingModule { }
