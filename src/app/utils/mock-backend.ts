import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User } from '@app/models/user.interface';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
      firstName: 'Admin',
      lastName: 'User',
      dob: '11.11.2011',
      address: '10000 Berlin, Germany',
      token: 'mock-jwt-token',
    },
  ];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = request.headers.get('Authorization');
    const isLoggedIn = authHeader && authHeader.startsWith('Bearer mock-jwt-token');

    return of(null)
      .pipe(
        mergeMap(() => {
          if (request.url.endsWith('/login') && request.method === 'POST') {
            const user = this.users.find(
              x => x.username === request.body.username && x.password === request.body.password,
            );
            if (!user) {
              return this._getError('Username or password is incorrect');
            }

            return this._getSuccess(user);
          }

          if (request.url.endsWith('/users') && request.method === 'GET') {
            if (!isLoggedIn) {
              return this._getUnauthorisedError();
            }
            return this._getSuccess(this.users);
          }

          if (request.url.endsWith('/newUser') && request.method === 'POST') {
            if (!!request.body && !!request.body.userRequest) {
              const { firstName, lastName, address, dob, id } = request.body.userRequest;
              const newUser = { id, firstName, lastName, address, dob };
              this.users.push(newUser);
              return this._getSuccess(this.users);
            }
            return this._getError('Something went wrong');
          }

          return next.handle(request);
        }),
      )
      .pipe(materialize(), delay(500), dematerialize());
  }

  private _getSuccess(body: User | User[]): Observable<HttpResponse<User | User[]>> {
    return of(new HttpResponse({ status: 200, body }));
  }

  private _getError(message: string): Observable<never> {
    return throwError({ status: 400, error: { message } });
  }

  private _getUnauthorisedError(): Observable<never> {
    return throwError({ status: 401, error: { message: 'Unauthorised!' } });
  }
}
