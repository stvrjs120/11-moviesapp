import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movimage'
})
export class MovimagePipe implements PipeTransform {

  transform(images: any[], size?: number): string {
    if (!images) {
      return 'assets/img/noimage.png';
    }

    if (size === 300) {
      return `https://image.tmdb.org/t/p/w300${images}`;
    } else {
      return `https://image.tmdb.org/t/p/w500${images}`;
    }
  }

}
