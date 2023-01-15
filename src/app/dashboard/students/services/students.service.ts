import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Student } from 'src/app/core/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students = new BehaviorSubject<Student[]>([
    new Student (1, 'Juan', 'Gonzalez', true),
    new Student (2, 'Martín', 'Longo', true),
    new Student (3, 'Juan Pablo', 'Pristinni', true),
    new Student (4, 'María', 'Rojo', true),
    new Student (5, 'Rubén', 'Ways', true),
  ]);

  public students$: Observable<Student[]>;

  constructor() {
    this.students$ = this.students.asObservable();
   }

  createStudent(newStudentData: Omit<Student, 'id' | 'active'>): void {
    this.students.pipe(take(1)).subscribe((students) => {
      const lastId = students[students.length - 1]?.id || 0;
      this.students.next([
        ...students,
        new Student(lastId + 1, newStudentData.name, newStudentData.surname, true)
      ])
    })
  }

  editStudent(id: number, data: Partial<Student>): void {
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next(
        students.map(
          (stu) => stu.id === id
          ? new Student(
            stu.id,
            data.name || stu.name,
            data.surname || stu.surname,
            data.active || stu.active,
          )
          : stu
        )
      )
    })
  }

  removeStudent(id: number){
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next(students.filter((stu) => stu.id !== id))
    })
  }

  getStudentById(id: number): Observable<Student | null> {
    return this.students$.pipe(
      take(1), map((students) => students.find((stu) => stu.id === id) || null)
    )
  }
}
