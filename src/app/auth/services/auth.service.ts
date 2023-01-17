import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import {
  LoginSuccessful,
  SingleUserResponse,
} from 'src/app/core/models/reqres.interfaces';
import { User } from 'src/app/core/models/user.model';
import { SessionService } from 'src/app/core/services/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = 'https://reqres.in/api';

  constructor(
    private readonly htttpClient: HttpClient,
    private readonly sessionService: SessionService,
    private readonly router: Router,
  ) {}

  login(data: { email: string; password: string }): Observable<User> {
    return this.htttpClient
      .post<LoginSuccessful>(`${this.apiURL}/login`, data)
      .pipe(
        tap((data) => localStorage.setItem('token', data.token)),
        mergeMap(() =>
          this.htttpClient.get<SingleUserResponse>(`${this.apiURL}/users/8`)
        ),
        map(
          ({ data }) =>
            new User(data.id, data.email, data.name, data.surname, data.avatar)
        ),
        tap((user) => this.sessionService.setUser(user))
      );
  }

  verifyToken(): Observable<boolean> {
    const lsToken = localStorage.getItem('token');

    return of(lsToken).pipe(
      tap((token) => {
        if (!token) throw new Error('Token invalido');
      }),
      mergeMap((token) =>
        this.htttpClient.get<SingleUserResponse>(`${this.apiURL}/users/7`)
      ),
      tap(({ data }) =>
        this.sessionService.setUser(
          new User(data.id, data.email, data.name, data.surname, data.avatar)
        )
      ),
      map((user) => !!user),
      catchError(() => of(false))
    );
  }

  loginOut() {
    localStorage.removeItem('token');
    this.sessionService.setUser(null);
    this.router.navigate(['auth', 'login'])
  }
}
