import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then((module) => module.StudentsModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then((module) => module.CoursesModule)
  },
  {
    path: 'commisions',
    loadChildren: () => import('./commisions/commisions.module').then((module) => module.ComissionsModule)
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((module) => module.UsersModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
