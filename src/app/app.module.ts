import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WrapperComponent } from './dashboard/layout/wrapper/wrapper.component';
import { SidenavComponent } from './dashboard/layout/sidenav/sidenav.component';
import { HeaderComponent } from './dashboard/layout/header/header.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { StudentsComponent } from './dashboard/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WrapperComponent,
    SidenavComponent,
    HeaderComponent,
    ProfileComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
