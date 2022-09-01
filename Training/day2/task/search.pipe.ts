import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args:string): any {
    if(args.length ===0)
    return value;
    else{
      return value.filter(data=>{
        return JSON.stringify(data).match(args);
      })
    }
  }

}
