import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitOfText',
  pure:false
})
export class LimitOfTextPipe implements PipeTransform {

  transform(description: String): any {
    if (description.length>107){
      return description.substr(0,107).concat('...');
    }
    else{
      return description;
    }

  }

}
