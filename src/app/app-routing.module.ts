import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/authentication/log-in/log-in.component';
import { AuthService } from './Services/auth.service';

const routes: Routes = [
{path:"", redirectTo: '/account', pathMatch:'full'},
{path:"auth", loadChildren: () => import('./Modules/authentication/authentication.module').then(m=>m.AuthenticationModule)},
{path: "account",loadChildren: () => import('./Modules/nav-menu/nav-menu.module').then(m => m.NavMenuModule),  canActivate: [AuthService] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
