import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { animes } from '../interfaces/anime.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class AnimeService {

  private endPoint: string = environment.endPoint

  constructor(private http: HttpClient) { }

  getAnime(): Observable<animes[]>  {
   return this.http.get<animes[]>(`${this.endPoint}/animes`)
  }

  getAnimeInfo(id : string ): Observable<animes>  {
    return this.http.get<animes>(`${this.endPoint}/animes/${id}`)
   }

   getSugerenciaAnime(termino:string): Observable<animes[]>  {
    return this.http.get<animes[]>(`${this.endPoint}/animes/?q=${termino}&_limit3`)
   }

   guardarAnime(anime : animes): Observable<animes>{
    return this.http.post<animes>(` ${this.endPoint}/animes`, anime)
   }
}
