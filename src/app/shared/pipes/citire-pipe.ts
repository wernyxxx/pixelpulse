import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'citire' })
export class CitirePipe implements PipeTransform {
  transform(minute: number): string {
    return `${minute} min citire`;
  }
}
