import { Component, OnDestroy } from '@angular/core';
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
export class LoginComponent implements OnDestroy {
  public loading = false;
  public form = new FormGroup({
    email: new FormControl('michael.lawson@reqres.in', [Validators.required]),
    password: new FormControl('cityslicka', [Validators.required]),
  });
  private destroyed$ = new Subject();

  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {
    this.sessionService.user$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => {
        if (user) {
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
      .subscribe(() => (this.loading = false));
  }
}
