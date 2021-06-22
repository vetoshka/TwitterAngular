import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../core/base-http.service';
import { LoginRequest } from '../models/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService {

  constructor(public http: HttpClient) {
    super(http);
  }

  logIn(loginRequest:LoginRequest):Observable<any>{

   return this.post('api/Account/LogIn', loginRequest);
    
  }
}
