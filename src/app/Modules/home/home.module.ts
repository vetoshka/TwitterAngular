import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { TweetModule } from '../tweet/tweet.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewTweetModule } from '../new-tweet/new-tweet.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NewTweetModule ,
    HomeRoutingModule,
    TweetModule
  ],
  providers:[HttpClient],
  exports:[HomeComponent],
})
export class HomeModule { 
}
