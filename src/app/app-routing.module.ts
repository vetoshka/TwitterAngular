import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/authentication/log-in/log-in.component';

const routes: Routes = [
{path:"", redirectTo: '/logIn', pathMatch:'full'},
{path:"logIn", component: LogInComponent},
{path: "",loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule) },
{ path:"profile",loadChildren: () => import('src/app/Modules/profile/profile.module').then(m => m.ProfileModule)},
{path: "tweet", loadChildren: () => import('src/app/Modules/new-tweet/new-tweet.module').then(m => m.NewTweetModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
