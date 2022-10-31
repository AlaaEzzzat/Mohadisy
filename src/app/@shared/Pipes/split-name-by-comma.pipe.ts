import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitNameByComma'
})
export class SplitNameByCommaPipe implements PipeTransform {

  transform(val:string):string[] | null {
    if(val){
      return val.split(',');
    }else{
      return null
    }
    
  }

}
