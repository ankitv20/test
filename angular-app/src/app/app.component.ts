import { Component } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  tagTitle: string ='Type Here'; 
  data:string = "Data is here"; 
  show = true;
  phoneNo: string = "7023493436";
 

  users: Array<User>= [
   {image: 'assets/u1.jpg', name:'Ankit', age:28, salary:50000, city:'Jaipur', role:'Developer'},
  //  
]

  getData(e:any){
    console.log(`Data recieved from child is: ${e}`);
    
  }
}
