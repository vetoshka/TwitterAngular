import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TweetService{
    constructor(private http: HttpClient){}
    getTweets(){
        return this.http.get('https://localhost:44301/api/Tweet')
    }
}