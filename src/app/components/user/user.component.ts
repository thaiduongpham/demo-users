import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { User } from '@app/models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}
}
