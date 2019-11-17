import { Injectable } from '@angular/core';

import { Observable, of, merge } from 'rxjs';

import { delay } from 'rxjs/operators';
import { Toast } from '@app/models/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  toast$: Observable<Toast> = of(null);

  showToast(toast: Toast): void {
    this.toast$ = merge(of(toast), of(null).pipe(delay(5000)));
  }

  hideToast(): void {
    this.toast$ = of(null);
  }
}
