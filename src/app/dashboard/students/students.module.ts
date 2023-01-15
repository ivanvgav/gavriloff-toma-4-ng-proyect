import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { StudentsRoutingModule } from './students-routing.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentModalComponent,
    StudentDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule,
    MatTableModule,
  ]
})
export class StudentsModule { }
