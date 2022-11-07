import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryTransform',
})
export class CountryTransformPipe implements PipeTransform {
  countery: any = [{ name: 'اللملكه العربيه السعوديه', code: 'uk' },
  { name: 'اللملكه العربيه السعوديه', code: 'RD ' },
  { name: 'اللملكه العربيه السعوديه', code: 'MQ ' }];

  transform(countryCode: string, args?: any) : any{
    let test = this.countery.filter((country: any) => {
      if (country.code === countryCode) {
        return country.name;
      }
    });
  }
}
