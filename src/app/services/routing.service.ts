import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private _router: Router) {}

  goTo(route: string) {
    this._router.navigate([route]);
  }

  goToWithId(route: string, id: number) {
    this._router.navigate([`${route}`, id]);
  }
}
