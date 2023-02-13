import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
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

  ngOnInit(): void {
    this.authService.isAuthenticated$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        if (value) {
          this.router.navigate(['dashboard', 'students']);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

  login() {
    this.loading = true;
    this.authService
      .login({
        email: this.form.get('email')?.value || '',
        password: this.form.get('password')?.value || '',
      })
  }
}
