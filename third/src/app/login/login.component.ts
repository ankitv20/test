// Reactive Forms

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = new FormControl("", [
    // validations block 
    Validators.required,
    Validators.email // checks if the pattern matches as an email
  ])
  password = new FormControl("", [
    // validations block 
    Validators.required,
    Validators.minLength(6) // checks if min password length is6
  ])

  login(){
    console.log(this.loginForm.value); // value will appear in the form of an object
  }

  //grouping the fields together, 
  loginForm = new FormGroup({
    email:this.email,
    password:this.password
  })

  reset(){
    this.loginForm.reset();
  }



}
