import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from 'src/app/Components/authentication/log-in/log-in.component';

const routes: Routes = [
  {path: 'login', component: LogInComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
