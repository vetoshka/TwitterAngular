import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTweetModule } from './Modules/new-tweet/new-tweet.module';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
{path:"", redirectTo: '/home', pathMatch:'full'},
{path: "",loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule) },
{ path:"profile",loadChildren: () => import('src/app/Modules/profile/profile.module').then(m => m.ProfileModule)},
{path: "tweet", component: NewTweetComponent }]//, loadChildren: () => import('src/app/Modules/new-tweet/new-tweet.module').then(m => m.NewTweetModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
