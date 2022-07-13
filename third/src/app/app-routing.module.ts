import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';

// array of routes object with properties path and component. 
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'/register', pathMatch:'full'}, // for home component,if no home home, redirect to login page
  {path:'**', component:PagenotfoundComponent} 
  // called wild card: for unknown pages. Always at the end, otherwise ** will match with every page and show 404.

   
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }