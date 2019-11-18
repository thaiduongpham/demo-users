import { UiService } from '@app/services/ui.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '@app/services/auth.service';
import { USERS } from '@app/app.routes';
import { UserService } from '@app/services/user.service';
import { RoutingService } from '@app/services/routing.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private _authService: AuthService,
    private _uiService: UiService,
    private _routingService: RoutingService,
    private _userService: UserService,
  ) {}

  ngOnInit() {
    this.isLoggedIn$ = this._authService.currentUser.pipe(map(user => !!user));
  }

  logout(): void {
    this._authService.logout();
  }

  toggleSidebar() {
    const el = document.getElementById('sidebar');
    el.classList.toggle('active');
  }

  goToUsers(): void {
    this._routingService.goTo(USERS);
  }

  goToUserDetail(): void {
    const id = this._userService.getNewUserId();
    this._routingService.goToWithId(USERS, id);
  }
}
