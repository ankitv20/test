import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {

  transform(value: string, name?:string): unknown {
    if(name === "USA") return "+1 " + value; 
    return "+91 " + value;
  }

}
