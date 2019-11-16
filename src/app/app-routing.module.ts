import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as routes from './app.routes';
import { UsersComponent } from './components/users/users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: routes.LOGIN, pathMatch: 'full' },
  { path: routes.LOGIN, component: LoginComponent },
  { path: routes.USERS, component: UsersComponent, canActivate: [AuthGuard] },
  { path: routes.USER_DETAIL, component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
