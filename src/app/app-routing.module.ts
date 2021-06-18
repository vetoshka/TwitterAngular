import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"", redirectTo: '/home', pathMatch:'full'},
{path: "home",loadChildren: () => import('src/app/Modules/home/home.module').then(m => m.HomeModule) },
{ path:"profile" ,loadChildren: () => import('src/app/Modules/profile/profile.module').then(m => m.ProfileModule)},
{path: "tweet", loadChildren: () => import('src/app/Modules/new-tweet/new-tweet.module').then(m => m.NewTweetModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
