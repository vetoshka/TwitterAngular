import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './Modules/home/home.module';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import { TweetComponent } from './tweet/tweet.component';

const routes: Routes = [
 // { path: '', redirectTo: '/home', pathMatch: 'full' },
 // { path: 'home', component: HomeComponent},
 {
  path: 'home',
  loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule)
},
  {path: 'newTweet', component:NewTweetComponent},
  {path: 'tweet', component: TweetComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
