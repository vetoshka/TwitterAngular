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

  post():any{

  }

  put(){

  }
  delete(){

  }
}
