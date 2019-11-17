import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

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
  constructor(private _routingService: RoutingService, private _userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this._userService.getUsers();
  }

  goToUserDetail(): void {
    const id = this._userService.getNewUserId();
    this._routingService.goToWithId(USERS, id);
  }
}
