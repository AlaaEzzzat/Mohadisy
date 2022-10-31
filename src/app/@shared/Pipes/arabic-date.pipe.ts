import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arabicDate'
})
export class ArabicDatePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    let date = new Date(value)
    return date.toLocaleDateString('ar-eg');
  }
}
