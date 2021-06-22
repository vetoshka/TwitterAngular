import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(public http: HttpClient) { }
  get<T>(url: string):Observable<T>{
    return this.http.get<T>(environment.apiUrl+url)
  }

  post(url: string,object:any):Observable<any> {
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(object);
    
    return this.http.post(environment.apiUrl + url, body,{'headers':headers})
  }

  put(){

  }
  delete(){

  }
}
