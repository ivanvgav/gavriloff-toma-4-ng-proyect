import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnDestroy {
  form = new FormGroup({
    name: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    surname: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  })

  user: User | null = null
  private destroyed$ = new Subject();
  constructor(public readonly sessionService: SessionService) {
    this.sessionService.user$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => {
        if (user) {
          this.user = user
          this.form.patchValue(user);
        }
      })
   }
  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  onSubmit() {
    if (this.user) {
      this.sessionService.updateSessionUser(this.form.value)
    }
  }

}
