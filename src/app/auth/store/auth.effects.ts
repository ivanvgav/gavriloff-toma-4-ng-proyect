import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { LoginSuccessful, SingleUserResponse } from 'src/app/core/models/reqres.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, concatMap, map, mergeMap, of, tap, throwError } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AppState } from 'src/app/core/models/app-state.model';
import { Store } from '@ngrx/store';


@Injectable()
export class AuthEffects {
  private apiUrl = 'https://reqres.in/api';

  constructor(private actions$: Actions, private httpClient: HttpClient) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap(({ email, password }) => {
        return this.login({ email, password })
          .pipe(
            map((user) => AuthActions.loginSuccess({ authenticatedUser: user })),
            catchError((error) => of(AuthActions.loginFailure({ error })))
          )
      })
    )
  );

  verifyToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.verifyToken),
      mergeMap(({ token }) => {
        return this.verifyToken(token)
          .pipe(
            map((user) => AuthActions.verifyTokenSuccess({ authenticatedUser: user })),
            catchError((error) => of(AuthActions.verifyTokenFailure({ error })))
          )
      })
    )
  );

  private login(data: { email: string; password: string }): Observable<User> {
    return this.httpClient
      .post<LoginSuccessful>(`${this.apiUrl}/login`, data)
      .pipe(
        tap((data) => localStorage.setItem('token', data.token)),
        mergeMap(() =>
          this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
        ),
        map(
          ({ data }) =>
            new User(
              data.id,
              data.email,
              data.first_name,
              data.last_name,
              data.avatar
            )
        ),
      );
  }

  private verifyToken(argToken: string): Observable<User> {
    return of(argToken)
      .pipe(
        tap((token) => {
          if (!token) throw new Error('Token invalido');
        }),
        mergeMap((_) =>
          this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
        ),
        map(
          ({ data }) =>
            new User(
              data.id,
              data.email,
              data.first_name,
              data.last_name,
              data.avatar
            )
        ),
      )
  }
}