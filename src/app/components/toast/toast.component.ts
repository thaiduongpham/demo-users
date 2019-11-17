import { Component, Input } from '@angular/core';

import { Toast } from '@app/models/toast.interface';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  @Input() toast: Toast;
}
