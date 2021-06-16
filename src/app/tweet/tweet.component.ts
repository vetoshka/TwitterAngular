import { Component, OnInit } from '@angular/core';
import { TweetService} from 'src/app/Services/tweet.service';
import { Tweet } from '../models/tweet';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  providers:[TweetService]
})
export class TweetComponent implements OnInit {

  constructor( private tweetService:TweetService){}
      
  tweets: Tweet[]=[];
    ngOnInit(){

     this.tweetService.getTweets().subscribe((data: Tweet[]) => this.tweets=data);
    }

}
