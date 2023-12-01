import { Component, OnInit } from '@angular/core';
import { Estado, animes } from '../../interfaces/anime.interface';
import { AnimeService } from '../../service/anime.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  estado = [
    { nombre: 'En Curso', valor: Estado.EnCurso },
    { nombre: 'Finalizado', valor: Estado.Finalizado }
  ];
  
  

   anime: animes = {
    id: "",
    titulo: "",
    genero: [""],
    sinopsis: "",
    temporadas: 0,
    episodios: 0,
    estado: Estado.EnCurso,
    estudio: "",
    puntuacion: 8,
  };
  constructor(private animesService : AnimeService) { }

  ngOnInit(): void {
  }

  guardarAnime(){

    this.animesService.guardarAnime(this.anime)
    .subscribe( resp => console.log(resp))
  }

  reiniciar(){
    this.anime={
      id:'',        
      titulo:'',           
      genero: [''],            
      sinopsis:'',          
      temporadas: 0,       
      episodios: 0,        
      estado: Estado.EnCurso,         
      estudio:'',         
      puntuacion: 0,  
    }
  }
  
}
