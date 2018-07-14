import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthWrapperComponent} from './auth-wrapper/auth-wrapper.component';

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
