import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/login-request';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [ ]
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  constructor( private authService:AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }
  get getElements() { return this.loginForm.controls; }
  login()
  { const loginRequest: LoginRequest = {
    userName: this.getElements.username.value,
    password: this.getElements.password.value,
  };
  console.log(loginRequest);
  this.authService.logIn(loginRequest)
      .subscribe(
        res => {
          localStorage.setItem("token", res.token);
          this.router.navigate(['/home'])
      }
        );

  }

}
