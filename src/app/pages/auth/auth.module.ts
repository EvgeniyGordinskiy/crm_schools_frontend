import {NgModule, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import {SharedModule} from '@sharedModules/shared-module/shared-module.module';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';
import {AuthService} from '@services/auth/auth.service';
import {AccountService} from '@services/account/account.service';

// @ngrx
import { Store } from '@ngrx/store';
import * as SpinnerReducer from '@store/spinner/reducers';
import {StartSpinner, StopSpinner} from '@store/spinner/actions';
import {AuthFacade} from '@app/facades/auth/authFacade';
import {SchoolService} from '@services/school/school.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {NgxMaskModule} from 'ngx-mask';


@NgModule({
  imports: [
    NgxMaskModule.forRoot(),
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, AuthWrapperComponent, ForgotPasswordComponent, ResetPasswordComponent],
  providers: [AuthService, SchoolService, AccountService]
})
export class AuthModule implements OnDestroy, OnInit {

  constructor(
    private authFacade: AuthFacade,
    private spinnerStore: Store<SpinnerReducer.SpinnerState>
  ) {
    this.authFacade.checkAuthStatusAndRedirect();
  }

  ngOnInit() {
    this.spinnerStore.dispatch(new StopSpinner());
  }

  ngOnDestroy() {
    this.spinnerStore.dispatch(new StartSpinner());
  }
}
