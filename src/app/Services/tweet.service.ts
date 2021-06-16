import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../core/base-http.service';
import { Tweet } from '../models/tweet';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetService extends BaseHttpService  {

  constructor(public http: HttpClient) {
    super(http);
  }

  getTweets(): Observable<Tweet[]> {
    const url = `api/Tweet`;
    
    return this.get<Tweet[]>(url).pipe(map((data:any)=>{
      let usersList = data;
      return usersList.map(function(tweet: Tweet): Tweet {
          return new Tweet(tweet.text);
        });
  }));;
  }
}
