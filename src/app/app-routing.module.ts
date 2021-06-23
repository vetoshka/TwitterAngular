import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/authentication/log-in/log-in.component';

const routes: Routes = [
{path:"", redirectTo: '/auth/login', pathMatch:'full'},
{path:"auth", loadChildren: () => import('./Modules/authentication/authentication.module').then(m=>m.AuthenticationModule)},
{path: "account",loadChildren: () => import('./Modules/nav-menu/nav-menu.module').then(m => m.NavMenuModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
