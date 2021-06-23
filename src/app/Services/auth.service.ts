import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../core/base-http.service';
import { LoginRequest } from '../models/login-request';
import { Subject } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService implements CanActivate {
  constructor(public http: HttpClient,private jwtHelper: JwtHelperService, private router: Router) {
    super(http);
  }
  logIn(loginRequest:LoginRequest):Observable<any>{

   return this.post('api/Account/LogIn', loginRequest);
    
  }
  canActivate() {
    const token = localStorage.getItem("token");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    this.router.navigate(["/auth/login"]);
    return false;
  }
}
