import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Observable, of, merge } from 'rxjs';

import { delay, filter, map } from 'rxjs/operators';
import { Toast } from '@app/models/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  navigationTitle$: Observable<string> = of(null);
  toast$: Observable<Toast> = of(null);

  constructor(private _router: Router) {
    this.navigationTitle$ = this._router.events.pipe(
      filter(events => events instanceof NavigationEnd),
      map((events: NavigationEnd) => events.url.replace('/', '')),
    );
  }

  showToast(toast: Toast): void {
    this.toast$ = merge(of(toast), of(null).pipe(delay(5000)));
  }

  hideToast(): void {
    this.toast$ = of(null);
  }
}
