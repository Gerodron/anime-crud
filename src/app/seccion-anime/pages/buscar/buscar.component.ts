import { Component, OnInit } from '@angular/core';
import { animes } from '../../interfaces/anime.interface';
import { AnimeService } from '../../service/anime.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino : string  = '';
  anime : animes [] = [];
  animeSelecionado: animes | undefined ;


  constructor(private animeService : AnimeService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.animeService.getSugerenciaAnime(this.termino.trim())
    .subscribe( anime => this.anime = anime )
  }

  animeSelected(event : MatAutocompleteSelectedEvent ){

    /* NO COMPRENDI ESTA PARTE */
    if (!event.option.value){  
      this.animeSelecionado = undefined
      return;
    }

    const anime : animes = event.option.value;
    this.termino = anime.titulo

    this.animeService.getAnimeInfo(anime.id!)
    .subscribe( anime => this.animeSelecionado=anime )

  }


}
