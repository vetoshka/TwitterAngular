import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { NewTweetComponent } from 'src/app/new-tweet/new-tweet.component';
import { ProfileComponent } from 'src/app/profile/profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'tweet', component: NewTweetComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavMenuRountingModule { }
