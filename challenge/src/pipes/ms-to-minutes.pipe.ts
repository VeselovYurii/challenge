import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToMinutes'
})
export class MsToMinutesPipe implements PipeTransform {

  transform(value: number): number {
    return Math.floor(value / 1000/60);
  }

}
