import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import {
  LoginSuccessful,
  SingleUserResponse,
} from 'src/app/core/models/reqres.interfaces';
import { Store } from "@ngrx/store";
import { User } from 'src/app/core/models/user.model';
import { login, verifyToken, logOut } from '../store/auth.actions';
import { AppState } from 'src/app/core/models/app-state.model';
import { selectIsAuthenticated } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = 'https://reqres.in/api';

  public isAuthenticated$: Observable<boolean>;

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router,
  ) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
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
