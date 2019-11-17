import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { UiService } from './services/ui.service';
import { Toast } from './models/toast.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public uiService: UiService) {}
  ngOnInit() {
    // this.uiService.toast$.subscribe(val => console.log('value:', val));
  }
}
