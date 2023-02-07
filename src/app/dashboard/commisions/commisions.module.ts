import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommisionsComponent } from './commisions.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { CommisionsRoutingModule } from './commisions-routing.module';



@NgModule({
  declarations: [
    CommisionsComponent
  ],
  imports: [
    CommonModule,
    CommisionsRoutingModule,
    MatTableModule,
    MatSortModule,
    SharedModule
  ]
})
export class ComissionsModule { }
