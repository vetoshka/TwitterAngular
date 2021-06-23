import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { NavigationBarComponent } from 'src/app/Components/navigation-bar/navigation-bar.component';

const routes: Routes = [

  {path: '', component: NavigationBarComponent },
  {path:'home',loadChildren: () => import('src/app/Modules/home/home.module').then(m => m.HomeModule), outlet:'nav'},
  { path:"profile",loadChildren: () => import('src/app/Modules/profile/profile.module').then(m => m.ProfileModule), outlet:'nav'},
  {path: "tweet", loadChildren: () => import('src/app/Modules/new-tweet/new-tweet.module').then(m => m.NewTweetModule), outlet:'nav' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavMenuRountingModule { }
