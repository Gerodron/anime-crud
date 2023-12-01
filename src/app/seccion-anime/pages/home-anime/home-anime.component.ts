import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-anime',
  templateUrl: './home-anime.component.html',
  styleUrls: ['./home-anime.component.css']
})
export class HomeAnimeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/auth/login'])
  }
}
