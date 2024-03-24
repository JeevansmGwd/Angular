import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charPipe',
  standalone: true
})
export class CharPipePipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (typeof value === 'string' && value.length >= length) {
      return value.substring(0, length);
    } else {
      return value;
    }
  }
}