import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'integracion'
})
export class IntegracionPipe implements PipeTransform {

  transform(toolsObject: any, si?: any, no?: any): any {
    if(typeof si === 'undefined'){
      si = false;
    }else if (typeof no === 'undefined') {
      no = false;
    }
    let filterByLms: any[];
    if(si && !no){
      // buscar solo los que tienen lms
      filterByLms = toolsObject.filter((item) => {
        if(item.integration_lms.toLowerCase().indexOf('si') !== -1){
          return item;
        }
      });
    }else if(no && !si){
      // buscar solo los que NO tienen lms
      filterByLms = toolsObject.filter(item => item.integration_lms.toLowerCase().indexOf('no') !== -1);
    }else if(no && si){
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
