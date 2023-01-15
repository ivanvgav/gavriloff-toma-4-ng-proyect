import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss']
})

export class StudentModalComponent implements OnInit {
  nameControl = new FormControl('', [Validators.required])
  surnameControl = new FormControl('', [Validators.required, Validators.email])

  studentForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl
  });

  constructor(
    //private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Student | undefined,
  ) {
    if (data) {
      this.studentForm.patchValue(data);
    }
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  close() {
    //this.dialogRef.close()
  }

}
