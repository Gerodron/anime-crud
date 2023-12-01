import { Component, Input, OnInit } from '@angular/core';
import { animes } from '../../interfaces/anime.interface';

@Component({
  selector: 'app-cards-anime',
  templateUrl: './cards-anime.component.html',
  styleUrls: ['./cards-anime.component.css']
})
export class CardsAnimeComponent implements OnInit {
 
  @Input () anime!: animes;

  constructor() { }

  ngOnInit(): void {


  }

}
