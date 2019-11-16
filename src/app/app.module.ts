import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/core/button/button.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TokenInterceptor } from './utils/jwt.interceptor';
import { ErrorInterceptor } from './utils/error.interceptor';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockBackendInterceptor } from './utils/mock-backend';
import { MatInputModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundComponent,
    LoginComponent,
    ButtonComponent,
    UsersComponent,
    UserItemComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true },
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
