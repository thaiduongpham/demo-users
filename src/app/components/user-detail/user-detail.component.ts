import { UserRequest } from './../../models/user-request.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { User } from '@app/models/user.interface';
import * as routes from '@app/app.routes';
import { RoutingService } from '@app/services/routing.service';
import { MatDatepicker } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @ViewChild(MatDatepicker, { static: true }) datepicker: MatDatepicker<Date>;
  userId: number;

  userForm: FormGroup;
  firstNameControl: FormControl;
  lastNameControl: FormControl;
  addressControl: FormControl;
  dobControl: FormControl;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _routingService: RoutingService,
  ) {}
  ngOnInit() {
    this._initForm();
    const params = this._route.snapshot.params;
    this.userId = +params.id;
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

  async onSubmit() {
    if (!this.userForm.valid) {
      return this.userForm.markAllAsTouched();
    }

    const { firstName, lastName, address } = this.userForm.value;
    const dob = this.dobControl.value.toString();
    const userRequest: UserRequest = { id: this.userId, firstName, lastName, address, dob };
    try {
      const result = await this._userService.addUser(userRequest).toPromise();
      console.log(result);
      this._routingService.goTo(routes.USERS);
    } catch (err) {
      console.log('__ERROR__', err);
    }
  }
}
