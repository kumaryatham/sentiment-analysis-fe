import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/registration/register.component';
import { UserListComponent } from './user/user-list.component';
import { AuthGaurd } from './helpers/auth.gaurd';


const routes: Routes = [
  {path: '', component: UserListComponent, canActivate: [AuthGaurd]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo :''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
