import { Pipe, PipeTransform } from '@angular/core';
import { animes } from '../interfaces/anime.interface';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(anime: animes): string {
    return `assets/img/${anime.id}.jpg` ;
    //assets/heroes/{{heroe.id}}.jpg
  }

}
