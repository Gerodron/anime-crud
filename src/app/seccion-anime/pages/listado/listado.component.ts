import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../service/anime.service';
import { animes } from '../../interfaces/anime.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private animeService : AnimeService) { }
  animes: animes[]=[]

  ngOnInit(): void {
    this.animeService.getAnime()
    .subscribe( anime => this.animes= anime)
    
  }

}
