import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TweetComponent } from 'src/app/tweet/tweet.component';
import { NewTweetComponent } from 'src/app/new-tweet/new-tweet.component';


@NgModule({
  declarations: [
    HomeComponent,
    TweetComponent,
    NewTweetComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[HomeComponent, TweetComponent, NewTweetComponent],
})
export class HomeModule { }
