import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from 'src/app/Components/authentication/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[LogInComponent]
})
export class AuthenticationModule { }
