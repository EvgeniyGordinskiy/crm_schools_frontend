import { NgModule } from '@angular/core';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {reducers} from './app.reducers';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserComponent } from '@layouts/user/user.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { TableComponent } from '@components/table/table.component';
import { MainSpinnerComponent } from '@components/main-spinner/main-spinner.component';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '@sharedModules/shared-module/shared-module.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {MainInterceptor} from '@services/interceptors/main.interceptor';
import {AuthInterceptor} from '@services/interceptors/auth.interceptor';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AuthService} from '@services/auth/auth.service';
export const metaReducers: MetaReducer<any>[] = environment.production
  ? []
  : []; // [storeFreeze]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    TableComponent,
    MainSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    HttpClientModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 50 })
      : [],
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
