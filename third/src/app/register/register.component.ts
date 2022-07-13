// Template Driven Forms
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router) { } // injected a router service in file.

  ngOnInit(): void {
  }

  register(regForm:NgForm){
    console.log(regForm.value);
    this.route.navigate(['login']) // we use array coz we can send other info along with component name.

  }

  reset(regForm:NgForm){
    regForm.reset();
  }
}
