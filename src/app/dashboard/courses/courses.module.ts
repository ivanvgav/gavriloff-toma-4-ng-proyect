import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatSortModule,
    SharedModule
  ]
})
export class CoursesModule { }
