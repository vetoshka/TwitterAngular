import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { NewTweetComponent } from 'src/app/Components/new-tweet/new-tweet.component';

const routes: Routes = [
  {path: 'tweet', component: NewTweetComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTweetRoutingModule { }
