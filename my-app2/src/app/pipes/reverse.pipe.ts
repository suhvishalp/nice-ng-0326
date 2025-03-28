import { Pipe, PipeTransform } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {


  constructor(){
    console.log('reverse pipe instance is created')
  }

  transform(value: string, shouldBeSorted?: true): string {
    if(!value) return value;

    const reversedString = value.split('').reverse().join('');

    if(shouldBeSorted){
      return reversedString.split('').sort().join('');
    }else {
      return reversedString;
    }
    

    
  }

}
