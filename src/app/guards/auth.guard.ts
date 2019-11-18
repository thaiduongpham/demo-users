import { RoutingService } from '@app/services/routing.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { LOGIN } from '@app/app.routes';
import { AuthService } from '@app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService, private _routingService: RoutingService) {}

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this._authService.currentUserValue;
    if (currentUser) {
      return true;
    }

    this._routingService.goTo(LOGIN);
    return false;
  }
}
