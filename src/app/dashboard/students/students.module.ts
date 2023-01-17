import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { StudentsRoutingModule } from './students-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentModalComponent,
    StudentDetailComponent,
  ],
  imports: [
    CommonModule,
    DashboardModule,
    SharedModule,
    StudentsRoutingModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
