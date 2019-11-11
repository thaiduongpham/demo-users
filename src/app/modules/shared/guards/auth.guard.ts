import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
// import { LocalStorageService, StorageTypes } from './../services/local-storage.service';
import * as routes from '../../../app.routes';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot): UrlTree | boolean {
    // if (!this.localStorageService.getCookie(StorageTypes.AUTH_TOKEN)) {
    // const loginUrlTree: UrlTree = this.router.parseUrl(routes.LOGIN);
    //   return loginUrlTree;
    // }
    return true;
  }
}
