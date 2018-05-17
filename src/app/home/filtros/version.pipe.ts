import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'version'
})
export class VersionPipe implements PipeTransform {

  transform(toolsObject: any, uno?: any, cero?: any): any {
    if(typeof uno === 'undefined'){
      uno = false;
    }else if (typeof cero === 'undefined') {
      cero = false;
    }
    let filterByLms: any[];
    if(uno && !cero){
      // buscar solo los que tienen u
      filterByLms = toolsObject.filter((item) => {
        if(parseFloat(item.version) > 1){
          return item;
        }
      });
    }else if(cero && !uno){
      // buscar solo los que cero tienen lms
      filterByLms = toolsObject.filter(item => parseFloat(item.version) <= 1);
    }else if(cero && uno){
      filterByLms = toolsObject;
    }
    else{
      filterByLms = toolsObject;
    }
    if(typeof filterByLms !== 'undefined'){
      if(filterByLms.length !== 0){
        let hash = {};
        filterByLms = filterByLms.filter(function(current) {
          let exists = !hash[current.id] || false;
          hash[current.id] = true;
          return exists;
        });
      }
    }

    return filterByLms;
  }

}
