import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '@layouts/user/user.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'home',
        loadChildren: './pages/layout/home/home.module#HomeModule'
      },
      {
        path: '**',
        redirectTo: '/home'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
