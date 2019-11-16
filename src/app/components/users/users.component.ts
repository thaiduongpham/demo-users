import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService } from '@app/services/auth.service';

import { User } from '@app/models/user.interface';
import { USERS } from '@app/app.routes';
import { RoutingService } from '@app/services/routing.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private _authService: AuthService, private _routingService: RoutingService) {}

  ngOnInit(): void {
    this.users$ = this._authService.getUsers();
  }

  goToUserDetail(userId: number): void {
    const id = userId || this._authService.getNewUserId();
    this._routingService.goToWithId(USERS, id);
  }
}
