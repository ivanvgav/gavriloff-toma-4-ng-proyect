import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Student } from 'src/app/core/models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  public student: Student | null = null
  private destroyed$ = new Subject()

  constructor(
    private readonly studentService: StudentsService, 
    private readonly activeRoute: ActivatedRoute
  ) { }
  
  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  ngOnInit(): void {
    this.studentService.getStudentById(parseInt(this.activeRoute.snapshot.params['studentId'] || 0))
    .pipe(takeUntil(this.destroyed$))
    .subscribe((result) => this.student = result)
  }

}