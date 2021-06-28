import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/models/registerRequest';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor( private authService:AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [''],
      password: [''],
      confirmPassword:[''],
      email: ['', [Validators.email]]
    },
    {
      validators: this.password.bind(this)
    });
  }
  get getElements() { return this.registerForm.controls; }
  register()
  { const registerRequest: RegisterRequest = {
    userName: this.getElements.username.value,
    password: this.getElements.password.value,
    passwordConfirm: this.getElements.confirmPassword.value,
    email: this.getElements.email.value
  };
  this.authService.register(registerRequest)
      .subscribe(
        res => {
          localStorage.setItem("token", res.token);
          this.router.navigate(['/account'])
      }
        );
  }
  password(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword');
    if(password === confirmPassword?.value){
      confirmPassword?.setErrors(null)
    }else{
      confirmPassword?.setErrors({passwordNotMatch: true})
    }
  }



}
