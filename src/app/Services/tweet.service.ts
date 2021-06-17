import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../core/base-http.service';
import { Tweet } from '../models/tweet';
import { map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetService extends BaseHttpService  {

  constructor(public http: HttpClient) {
    super(http);
  }

  getTweets(): Observable<Tweet[]> {
    
    
    return this.get<Tweet[]>(environment.getAllTweets).pipe(map((data:any)=>{
      let usersList = data;
      return usersList.map(function(tweet: Tweet): Tweet {
          return new Tweet(tweet.text);
        });
  })
    )
  };
}
