import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { User } from '@app/models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.users$ = this._authService.getUsers();
  }
}
