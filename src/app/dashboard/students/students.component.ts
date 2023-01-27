import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { Student } from 'src/app/core/models/student.model';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnDestroy {
  displayedColumns = ['id', 'name', 'surname', 'active', 'edit', 'delete', 'viewDetail'];
  students: Observable<Student[]>;
  private destroyed$ = new Subject();

  constructor(
    private readonly studentsService: StudentsService,
    private readonly dialogService: MatDialog
    ) {
      this.students = this.studentsService.students$;
     }
  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  editStudent(element: Student) {
    const dialog = this.dialogService.open(StudentModalComponent, {
      data: element
    })
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.editStudent(element.id, data)
      }
    })
  }

  createStudent() {
    const dialog = this.dialogService.open(StudentModalComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.createStudent({ name: data.name, surname: data.surname})
      }
    })
  }

  deleteStudent(element: Student) {
    this.studentsService.removeStudent(element.id);
  }

}
