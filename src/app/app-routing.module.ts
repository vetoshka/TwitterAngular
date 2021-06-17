import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './Modules/home/home.module';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import { TweetComponent } from './tweet/tweet.component';

const routes: Routes = [
 {
  path: '',
  loadChildren: () => import('./Modules/nav-menu/nav-menu.module').then(m => m.NavMenuModule)
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
