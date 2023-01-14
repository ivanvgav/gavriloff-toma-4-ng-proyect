import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SharedModule } from '../shared/modules/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DashboardComponent,
    WrapperComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    MatSidenavModule,
    DashboardRoutingModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
