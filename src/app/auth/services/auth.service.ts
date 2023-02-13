import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import { Store } from "@ngrx/store";
import { login, verifyToken, logOut } from '../store/auth.actions';
import { AppState } from 'src/app/core/models/app-state.model';
import { selectIsAuthenticated, selectLoggingIn } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = 'https://reqres.in/api';

  public isAuthenticated$: Observable<boolean>;
  public loggingIn$: Observable<boolean>;

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router,
  ) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.loggingIn$ = this.store.select(selectLoggingIn);
  }

  login(data: { email: string; password: string }): void {
    this.store.dispatch(login({ email: data.email, password: data.password}))
  }

  verifyToken() {
    this.store.dispatch(verifyToken({ token: localStorage.getItem('token') || ''}))
  }

  loginOut() {
    this.store.dispatch(logOut());
    this.router.navigate(['auth', 'login'])
  }
}
