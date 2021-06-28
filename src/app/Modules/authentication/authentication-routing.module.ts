import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from 'src/app/Components/authentication/log-in/log-in.component';
import { RegisterComponent } from 'src/app/Components/authentication/register/register.component';

const routes: Routes = [
  {path: 'login', component: LogInComponent },
  {path: 'register', component: RegisterComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
