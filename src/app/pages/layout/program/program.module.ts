import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramPageComponent } from './program-page/program-page.component';
import {ProgramRoutingModule} from '@pages/layout/program/program-routing.module';
import {SharedModule} from '@sharedModules/shared-module/shared-module.module';
import { ProgramCreateComponent } from './program-create/program-create.component';
import {CustomCarouselComponent} from '@components/custom-carousel/custom-carousel.component';
import {CalendarComponent} from '@components/calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProgramRoutingModule,
  ],
  declarations: [ProgramPageComponent, ProgramCreateComponent, CustomCarouselComponent, CalendarComponent
  ],
  entryComponents: [ProgramCreateComponent]
})
export class ProgramModule { }
