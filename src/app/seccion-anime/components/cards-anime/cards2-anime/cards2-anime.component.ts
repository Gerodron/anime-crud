import { Component, Input, OnInit } from '@angular/core';
import { animes } from '../../../interfaces/anime.interface';

@Component({
  selector: 'app-cards2-anime',
  templateUrl: './cards2-anime.component.html',
  styleUrls: ['./cards2-anime.component.css']
})
export class Cards2AnimeComponent implements OnInit {

  @Input() anime! :animes;
  
  constructor() { }

  ngOnInit(): void {
  }

}
