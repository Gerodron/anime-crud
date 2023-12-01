import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionAnimeRoutingModule } from './seccion-anime-routing.module';
import { HomeAnimeComponent } from './pages/home-anime/home-anime.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AnimeInfoComponent } from './pages/anime-info/anime-info.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CardsAnimeComponent } from './components/cards-anime/cards-anime.component';
import { ImgPipe } from './pipes/img.pipe';
import { FormsModule } from '@angular/forms';
import { Cards2AnimeComponent } from './components/cards-anime/cards2-anime/cards2-anime.component';

@NgModule({
  declarations: [
    HomeAnimeComponent,
    BuscarComponent,
    ListadoComponent,
    AnimeInfoComponent,
    AgregarComponent,
    CardsAnimeComponent,
    ImgPipe,
    Cards2AnimeComponent
  ],
  imports: [
    CommonModule,
    SeccionAnimeRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class SeccionAnimeModule { }
