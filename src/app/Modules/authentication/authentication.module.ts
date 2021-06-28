import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from 'src/app/Components/authentication/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from 'src/app/Components/authentication/register/register.component';


@NgModule({
  declarations: [LogInComponent,RegisterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthenticationRoutingModule
  ],
  exports:[LogInComponent , RegisterComponent],
  providers:[AuthService]
})
export class AuthenticationModule { }
