import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '@layouts/user/user.component';
import {SchoolModule} from '@pages/layout/school/school.module';

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
        path: 'school',
        loadChildren: './pages/layout/school/school.module#SchoolModule'
      },
      {
        path: 'dashboard',
        loadChildren: './pages/layout/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'program',
        loadChildren: './pages/layout/program/program.module#ProgramModule'
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
