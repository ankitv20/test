import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-comp-b2',
  templateUrl: './comp-b2.component.html',
  styleUrls: ['./comp-b2.component.css']
})
export class CompB2Component implements OnInit {

  constructor( private counterServ:CounterService ) { }

  ngOnInit(): void {
  }
  showCounter(){
    return this.counterServ.getCounter()
  }

  callUpdateCounter(){
    this.counterServ.updateCounter()
  }
  

}
