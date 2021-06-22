import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from 'src/app/Components/tweet/tweet.component';



@NgModule({
  declarations: [TweetComponent],
  imports: [
    CommonModule
  ],
  exports:[TweetComponent]
})
export class TweetModule { }
