import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from '@app/services/auth.service';
import { User } from '@app/models/user.interface';
import * as routes from '@app/app.routes';
import { RoutingService } from '@app/services/routing.service';
import { MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @ViewChild(MatDatepicker, { static: true }) datepicker: MatDatepicker<Date>;

  userForm: FormGroup;
  firstNameControl: FormControl;
  lastNameControl: FormControl;
  addressControl: FormControl;
  dobControl: FormControl;
  isHidden = true;

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _routingService: RoutingService) {}
  ngOnInit() {
    this._initForm();
  }

  private _initForm(): void {
    this.firstNameControl = new FormControl('', [Validators.required, Validators.maxLength(20)]);
    this.lastNameControl = new FormControl('', [Validators.required, Validators.maxLength(20)]);
    this.addressControl = new FormControl('', [Validators.required, Validators.maxLength(20)]);
    this.dobControl = new FormControl('', [Validators.required, Validators.maxLength(20)]);

    this.userForm = this._fb.group({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      address: this.addressControl,
      dob: this.dobControl,
    });
  }

  createUser(): void {
    console.log('creating user...');
  }
}
