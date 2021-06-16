import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from 'src/app/tweet/tweet.component';
import { NewTweetComponent } from 'src/app/new-tweet/new-tweet.component';



@NgModule({
  declarations: [TweetComponent ,NewTweetComponent],
  imports: [
    CommonModule
  ],
  exports:[TweetComponent,NewTweetComponent]
})
export class TweetModule { }
