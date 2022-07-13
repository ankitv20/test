import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
  providers:[CounterService] 
  // explicitly added service to this component rather than using the root component servie
})
export class CompBComponent implements OnInit {

  constructor( private counterServ:CounterService) { }

  ngOnInit(): void {
    
  }

  showCounter(){
    return this.counterServ.getCounter()
  }

  callUpdateCounter(){
    this.counterServ.updateCounter()
  }


}
