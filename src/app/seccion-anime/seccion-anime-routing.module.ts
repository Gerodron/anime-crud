import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeInfoComponent } from './pages/anime-info/anime-info.component';
import { HomeAnimeComponent } from './pages/home-anime/home-anime.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  {
    path:'',component:HomeAnimeComponent,
    children:[
      {path:'buscar', component:BuscarComponent},
      {path:'listado', component:ListadoComponent},
      {path:'agregar', component:AgregarComponent},
      {path:':id', component:AnimeInfoComponent},
      {path:'editar/:id', component:AgregarComponent},
      {path:'**', redirectTo:'buscar'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionAnimeRoutingModule { }
