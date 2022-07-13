import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proflie',
  templateUrl: './proflie.component.html',
  styleUrls: ['./proflie.component.css']
})
export class ProflieComponent implements OnInit {

  ngOnInit(): void { }

  name: string = "ankit verma";
  age: number = 28;
  design: string = "Developer";
  salary: number = 78000;
  isDisabled: boolean = true;
  btnColor: string;
  myDate !:Date;

  constructor() {
    const rndColor:Array<string> = ['red', 'green', 'blue', 'gold', 'pink', 'blueviolet', 'magenta']
    this.btnColor = "btn " + rndColor[Math.floor(Math.random() * 6)]
    console.log(this.btnColor);

    setTimeout(() => { this.isDisabled = false; }, 3000)
  }

  showSalary() {
    alert(`My salary is Rs.${this.salary} per month`);
  }

  // Double Binding
  inputValue="Type Here..!!"; // this is the bridge  between both the files

  // ngFor Directive
  fruits:string[]= ['Banana', 'Grapes', 'Apple','Grape', 'Mango', 'Kiwi'];

  





}
