import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '@layouts/user/user.component';
import {PermissionsModule} from '@pages/layout/permissions/permissions.module';
import {DashboardModule} from '@pages/layout/dashboard/dashboard.module';

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
        path: 'dashboard',
        loadChildren: './pages/layout/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'permissions',
        loadChildren: './pages/layout/permissions/permissions.module#PermissionsModule'
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
