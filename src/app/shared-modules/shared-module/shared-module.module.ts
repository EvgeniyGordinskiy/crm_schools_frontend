import { NgModule } from '@angular/core';
import {MaterialModule} from '../material-module/material-module.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports:      [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  ],
  exports:      [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
  ]
})

export class SharedModule {}
