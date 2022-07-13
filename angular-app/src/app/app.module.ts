import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProflieComponent } from './proflie/proflie.component';
import{FormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { CountryCodePipe } from '../pipes/country-code.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProflieComponent,
    UsersComponent,
    HighlightDirective,
    CountryCodePipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
