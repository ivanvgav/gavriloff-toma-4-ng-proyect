import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommisionsComponent } from './commisions.component';

const routes: Routes = [
    { path: '', component: CommisionsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
