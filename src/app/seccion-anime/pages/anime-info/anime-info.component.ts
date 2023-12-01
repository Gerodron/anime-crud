import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { animes } from '../../interfaces/anime.interface';
import { AnimeService } from '../../service/anime.service';


@Component({
  selector: 'app-anime-info',
  templateUrl: './anime-info.component.html',
  styleUrls: ['./anime-info.component.css']
})
export class AnimeInfoComponent implements OnInit {

  anime! : animes;

  constructor(private activatedRoute : ActivatedRoute, private animeService : AnimeService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe( 
      switchMap(({id}) => this.animeService.getAnimeInfo(id))
      )
      .subscribe( anime => this.anime=anime )
}
}


