import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'licencia'
})
export class LicenciaPipe implements PipeTransform {

  transform(toolsObject: any, licenciaAbierta?: any, licenciaCerrada?: any): any {
    console.log(toolsObject,licenciaAbierta,licenciaCerrada);
    if(typeof licenciaAbierta === 'undefined'){
      licenciaAbierta = false;
    }else if (typeof licenciaCerrada === 'undefined') {
      licenciaCerrada = false;
    }
    let filterByLms: any[];
    if(licenciaAbierta && !licenciaCerrada){
      // buscar solo los que tienen lms
      filterByLms = toolsObject.filter(item => item.license_type.toLowerCase().indexOf('abierta') !== -1);
    }else if(licenciaCerrada && !licenciaAbierta){
      // buscar solo los que licenciaCerrada tienen lms
      filterByLms = toolsObject.filter(item => item.license_type.toLowerCase().indexOf('privada') !== -1);
    }else if(licenciaCerrada && licenciaAbierta){
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
