import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router, Routes, RouterStateSnapshot } from '@angular/router';
import * as routes from '@app/app.routes';
import { AuthService } from '@app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) {}

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this._authService.currentUserValue;
    if (currentUser) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  // constructor(private router: Router) {}
  // canActivate(next: ActivatedRouteSnapshot): UrlTree | boolean {
  //   // if (!this.localStorageService.getCookie(StorageTypes.AUTH_TOKEN)) {
  //   const loginUrlTree: UrlTree = this.router.parseUrl(routes.LOGIN);
  //   //   return loginUrlTree;
  //   // }
  //   return true;
  // }
}
