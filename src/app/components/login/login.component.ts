import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from '@app/services/auth.service';
import { RoutingService } from '@app/services/routing.service';
import * as routes from '@app/app.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usernameControl: FormControl;
  passwordControl: FormControl;
  submitMessage = '';

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _routingService: RoutingService) {}
  ngOnInit() {
    this._initForm();
  }

  private _initForm(): void {
    this.usernameControl = new FormControl('', Validators.required);
    this.passwordControl = new FormControl('', Validators.required);

    this.loginForm = this._fb.group({
      username: this.usernameControl,
      password: this.passwordControl,
    });
  }

  async login() {
    if (!this.loginForm.valid) {
      return this.loginForm.markAllAsTouched();
    }

    try {
      const isAuthenticated = await this._authService
        .login(this.usernameControl.value, this.passwordControl.value)
        .toPromise();
      if (isAuthenticated) {
        this._routingService.goTo(routes.USERS);
      }
    } catch (err) {
      this.submitMessage = err;
    }
  }
}
