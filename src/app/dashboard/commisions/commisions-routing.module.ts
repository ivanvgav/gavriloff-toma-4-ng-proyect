import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommisionsComponent } from './commisions.component';

const routes: Routes = [
    { path: '', component: CommisionsComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommisionsRoutingModule {}
