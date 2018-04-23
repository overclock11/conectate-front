import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toolsFilter',
  pure:false
})
export class ToolsFilterPipe implements PipeTransform {

  transform(toolsObject: any[], filter: String): any {
    if (!toolsObject || !filter) {
      return toolsObject;
    }
    let filterByName: any[] = toolsObject.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    let filterByKeyWords: any[] = toolsObject.filter(item => item.key_words.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

    if(filterByName.toString() === '' && filterByKeyWords.toString() === ''){
      return [];
    }
    else{
      let results = filterByName.concat(filterByKeyWords);
      let hash = {};
      results = results.filter(function(current) {
        let exists = !hash[current.id] || false;
        hash[current.id] = true;
        return exists;
      });
      return results;
    }

  }

}
