import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { updateAuthenticatedUser } from 'src/app/auth/store/auth.actions';
import { authenticatedUserSelector } from 'src/app/auth/store/auth.selectors';
import { AppState } from 'src/app/core/models/app-state.model';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnDestroy {
  form = new FormGroup({
    first_name: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    last_name: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  })

  user: User | null = null
  private destroyed$ = new Subject();
  constructor(private readonly store: Store<AppState>) {
    this.store.select(authenticatedUserSelector)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => {
        if (user) {
          this.user = user;
          this.form.patchValue({
            first_name: user.first_name,
            last_name: user.last_name,
          })
        }
      })
   }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  onSubmit() {
    if (this.user) {
      this.store.dispatch(updateAuthenticatedUser({
        first_name: this.form.get('first_name')?.value || '',
        last_name: this.form.get('last_name')?.value || '',
      }))
    }
  }

}
