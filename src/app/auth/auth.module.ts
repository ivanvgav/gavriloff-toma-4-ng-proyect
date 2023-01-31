import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    HttpClientModule
  ]
})
export class AuthModule { }
