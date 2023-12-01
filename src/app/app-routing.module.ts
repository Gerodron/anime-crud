import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'error-404', loadChildren:()=> import('./shared/shared.module').then(m => m.SharedModule)},
  {path:'animes', loadChildren:()=> import('./seccion-anime/seccion-anime.module').then(m => m.SeccionAnimeModule)},
  {path:'auth', loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'**', redirectTo:'error-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
