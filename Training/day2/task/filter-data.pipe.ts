import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(args.length===0){
    return value;
    }else{
      return value.filter(data=>{
        return JSON.stringify(data).toLowerCase().match(args.toLowerCase());
      })
    }
  }

}
