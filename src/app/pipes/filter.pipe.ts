import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(fflist: any, searchName: any): any {
    if (searchName === undefined) return fflist;

    return fflist.filter(function(ffname){
      return ffname.name.toLowerCase().includes(searchName.toLowerCase());
    })
  }

}
