import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommisionsComponent } from './commisions.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    CommisionsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    SharedModule
  ]
})
export class ComissionsModule { }
