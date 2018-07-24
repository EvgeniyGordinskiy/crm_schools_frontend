import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthWrapperComponent} from './auth-wrapper/auth-wrapper.component';
import {ForgotPasswordComponent} from '@pages/auth/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from '@pages/auth/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthWrapperComponent,
    children: [
      {
        path: 'login', component: LoginComponent,
      },
      {
        path: 'register', component: RegisterComponent,
      },
      {
        path: 'forgotPassword', component: ForgotPasswordComponent,
      },
      {
        path: 'resetPassword', component: ResetPasswordComponent,
      },
    ]
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
export class AuthRoutingModule { }
