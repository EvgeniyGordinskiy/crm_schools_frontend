import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProgramPageComponent} from '@pages/layout/program/program-page/program-page.component';

const routes: Routes = [
  {
    path: '', component: ProgramPageComponent
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
export class ProgramRoutingModule { }
