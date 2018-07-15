import {NgModule, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {HomeRoutingModule} from './home-routing.module';
import {NavComponent} from '@components/nav/nav.component';
import {MaterialModule} from '@sharedModules/material-module/material-module.module';

import {StartSpinner, StopSpinner} from '@store/spinner/actions';
import * as SpinnerReducer from '@store/spinner/reducers';
import {Store} from '@ngrx/store';

@NgModule({
  declarations: [
    HomePageComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
  ]
})
export class HomeModule implements OnInit, OnDestroy {

  constructor(
    private spinnerStore: Store<SpinnerReducer.SpinnerState>
  ) {}

  ngOnInit() {
    this.spinnerStore.dispatch(new StopSpinner());
  }

  ngOnDestroy() {
    this.spinnerStore.dispatch(new StartSpinner());
  }
}
