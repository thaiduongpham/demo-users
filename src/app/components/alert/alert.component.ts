import { Component, OnInit, Input } from '@angular/core';
import { AlertStatus } from '@app/models/alert-status.enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() message = '';
  @Input() status: AlertStatus;

  constructor() {}

  ngOnInit() {}
}
