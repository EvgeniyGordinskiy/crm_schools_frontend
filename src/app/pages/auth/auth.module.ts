import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import {SharedModule} from '@sharedModules/shared-module/shared-module.module';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';
import {AuthService} from '@services/auth/auth.service';
import {AccountService} from '@services/account/account.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, AuthWrapperComponent],
  providers: [AuthService, AccountService]
})
export class AuthModule { }
