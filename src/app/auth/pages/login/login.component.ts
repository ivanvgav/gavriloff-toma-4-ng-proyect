import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, Subject, take } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loading = false;
  public form = new FormGroup({
    email: new FormControl('michael.lawson@reqres.in', [Validators.required]),
    password: new FormControl('cityslicka', [Validators.required]),
  });
  private destroyed$ = new Subject();

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {  }

  login() {
    this.loading = true;
    this.authService
      .login({
        email: this.form.get('email')?.value || '',
        password: this.form.get('password')?.value || '',
      })
    this.router.navigate(['dashboard', 'students'])
    this.authService.isAuthenticated$
      .pipe(filter((value) => value))
      .pipe(take(1))
      .subscribe((value) => {
        if (value) {
          this.router.navigate(['dashboard', 'students']);
        }
      });
  }
}
