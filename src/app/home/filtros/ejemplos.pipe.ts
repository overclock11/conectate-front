import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ejemplos'
})
export class EjemplosPipe implements PipeTransform {

  transform(toolsObject: any, ejemplos?: any, tutoriales?: any): any {
    console.log(toolsObject,ejemplos,tutoriales);
    if(typeof ejemplos === 'undefined'){
      ejemplos = false;
    }else if (typeof tutoriales === 'undefined') {
      tutoriales = false;
    }
    let filterByLms: any[];
    if(ejemplos && !tutoriales){
      // buscar solo los que tienen u
      filterByLms = toolsObject.filter((item) => {
        if(item.examples.length > 1){
          return item;
        }
      });
    }else if(tutoriales && !ejemplos){
      // buscar solo los que tutoriales tienen lms
      filterByLms = toolsObject.filter((item) => {
        if(item.tutorials.length > 1){
          return item;
        }
      });
    }else if(tutoriales && ejemplos){
      filterByLms = toolsObject.filter((item) => {
        if(item.examples.length > 1){
          return item;
        }
      });
      let aux = toolsObject.filter((item) => {
        if(item.examples.length > 1){
          return item;
        }
      });
      filterByLms = filterByLms.concat(aux);
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
