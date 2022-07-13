import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  constructor(private counterServ: CounterService) { } // injected the bridge between service and component

  ngOnInit(): void { }

  showCounter() {
    return this.counterServ.getCounter()
  }

  callUpdateCounter() {
    this.counterServ.updateCounter()
  }

}
