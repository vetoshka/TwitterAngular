import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TweetComponent } from 'src/app/tweet/tweet.component';
import { NewTweetComponent } from 'src/app/new-tweet/new-tweet.component';
import { TweetModule } from '../tweet/tweet.module';


@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TweetModule
  ],
  exports:[HomeComponent],
})
export class HomeModule { }
