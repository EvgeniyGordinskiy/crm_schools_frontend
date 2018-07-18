import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramPageComponent } from './program-page/program-page.component';
import {ProgramRoutingModule} from '@pages/layout/program/program-routing.module';
import {SharedModule} from '@sharedModules/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProgramRoutingModule,
  ],
  declarations: [ProgramPageComponent]
})
export class ProgramModule { }
