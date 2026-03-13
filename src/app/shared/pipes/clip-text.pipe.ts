import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clipText'
})
export class ClipTextPipe implements PipeTransform {

  transform(text: string, limit: number): string {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + '...';
  }

}
