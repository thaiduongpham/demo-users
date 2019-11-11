import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as routes from './app.routes';
import { UsersComponent } from './components/users/users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
// import { AuthGuard } from './modules/shared/guards/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: routes.LOGIN, pathMatch: 'full' },
  { path: routes.LOGIN, component: LoginComponent },
  { path: routes.USERS, component: UsersComponent },
  // { path: routes.CONTACTS, component: ContactsComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
