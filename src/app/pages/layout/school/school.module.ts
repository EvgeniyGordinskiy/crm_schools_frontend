import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SchoolRoutingModule} from '@pages/layout/school/school-routing.module';
import {SharedModule} from '@sharedModules/shared-module/shared-module.module';
import {SchoolService} from '@services/school/school.service';
import {CreateSchoolComponent} from '@pages/layout/school/create-school/create-school.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SchoolRoutingModule
  ],
  declarations: [CreateSchoolComponent],
  providers:[SchoolService]
})
export class SchoolModule { }
