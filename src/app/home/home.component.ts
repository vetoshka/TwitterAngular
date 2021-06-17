import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet';
import { TweetService } from '../Services/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TweetService]
})

export class HomeComponent implements OnInit {

  constructor( private tweetService:TweetService){}
      
  tweets: Tweet[]=[];
  error:any;
  title:string = "Home";
  ngOnInit(){

    this.tweetService.getTweets().subscribe((data: Tweet[]) => this.tweets=data,
    error => {this.error = error.message; console.log(error);})
   }

}
