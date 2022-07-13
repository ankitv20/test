import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // available in complete application
})
export class CounterService {

  private counter:number = 0;

  getCounter (){
    return this.counter;
  }

  updateCounter(){
    return this.counter = this.counter + 1;
  }

  constructor() { }
}
