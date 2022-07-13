import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  
//implements OnInit, OnChanges,OnDestroy{
{
  // Passing data from parent to child component
  @Input() name!: string;
  @Input() age!: number;
  @Input() salary!: number;
  @Input() city!: string;
  @Input() role!: string;
  @Input() imagePath!: string;
  @Input() title!: string;
  @Input() Pdata!:string;

  // Passing data from child to parent, Output Decorator

  @Output() myEvent = new EventEmitter<string[]>();

  passData() {
    this.myEvent.emit(['Angular', 'is', 'best!!']);
    // emmited event will contain the data to be passed to parent
  }

  // constructor() {
  //   console.log("I am constructor..", this.name);
  //   // initialize properties, called after instance creation of class,
  //   // cannot access @Input properties
  // }

  
  // ngOnInit() {
  //   console.log("I am ngOnInIt", this.name);
  //   //Properties, EventListener, Initial data fetch from API called after creation of component
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("I am ngonChanges", changes);
  //   // has access to all the @Input() values and detects any change in them 
    
  // }

  // ngOnDestroy(): void {
  //   console.log("Component Destroyed!!");
    
  // }
}
