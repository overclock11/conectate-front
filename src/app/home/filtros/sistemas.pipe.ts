import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sistemas'
})
export class SistemasPipe implements PipeTransform {

  transform(toolsObject: any, linux?: any, windows?: any, mac?: any): any {

    if(linux === 'undefined'){
      linux = false;
    }else if (windows === 'undefined') {
      windows = false;
    }
    else if(mac === 'undefined'){
      mac = false;
    }

    let filterBySO: any[];
    let aux: any[];


    if(linux && !windows && !mac){
      //busca solo linux
      filterBySO = toolsObject.filter(item => item.operative_systems.toLowerCase().indexOf('gnu/linux') !== -1);
    }
    else if(!linux && windows && !mac){
      //busca solo windows
      filterBySO = toolsObject.filter(item => item.operative_systems.toLowerCase().indexOf('windows') !== -1);
    }
    else if(!linux && !windows && mac){
      //busca solo mac
      filterBySO = toolsObject.filter(item => item.operative_systems.toLowerCase().indexOf('mac') !== -1);
    }
    else if(linux && windows && !mac) {
      //linux y windows
      filterBySO = toolsObject.filter(item => item.operative_systems.toLowerCase().indexOf('gnu/linux') !== -1);
      aux = toolsObject.filter(item => item.operative_systems.toLowerCase().indexOf('windows') !== -1);
      filterBySO = filterBySO.concat(aux);
    }
    else if(linux && !windows && mac) {
      //linux y mac
      filterBySO = toolsObject.filter(item => item.operative_systems.toLowerCase().indexOf('gnu/linux') !== -1);
      aux = toolsObject.filter(item => item.operative_systems.toLowerCase().indexOf('mac') !== -1);
      filterBySO = filterBySO.concat(aux);
    }
    else if(!linux && windows && mac) {
      //windows y mac
      filterBySO = toolsObject.filter(item => item.operative_systems.toLowerCase().indexOf('windows') !== -1);
      aux = toolsObject.filter(item => item.operative_systems.toLowerCase().indexOf('mac') !== -1);
      filterBySO = filterBySO.concat(aux);
    }
    else if(linux && windows && mac) {
      //los 3
      filterBySO = toolsObject;
    }
    else if(!linux && !windows && !mac) {
      //busca los 3
      filterBySO = toolsObject;
    }
    if(typeof filterBySO !== 'undefined'){
      if(filterBySO.length !== 0){
        let hash = {};
        filterBySO = filterBySO.filter(function(current) {
          let exists = !hash[current.id] || false;
          hash[current.id] = true;
          return exists;
        });
      }
    }
    return filterBySO;
  }

}
