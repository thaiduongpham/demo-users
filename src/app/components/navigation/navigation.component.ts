import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  routeName$: Observable<string>;

  constructor(private _authService: AuthService, private _router: Router) {}
  ngOnInit() {
    this.routeName$ = this._router.events.pipe(
      filter(events => events instanceof NavigationEnd),
      map((events: NavigationEnd) => events.url.replace(/\//g, '')),
    );
  }

  logout(): void {
    this._authService.logout();
  }
}
