import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@app/models/user.interface';
import { config } from '@app/utils/config';
import { UserRequest } from './../models/user-request.interface';
import { RoutingService } from './routing.service';
import * as routes from '@app/app.routes';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _http: HttpClient, private _routingService: RoutingService) {}

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${config.apiUrl}/users`);
  }

  getNewUserId(): number {
    return Math.floor(Math.random() * 10000);
  }

  addUser(userRequest: UserRequest) {
    return this._http.post<any>(`${config.apiUrl}/newUser`, { userRequest });
  }
}
