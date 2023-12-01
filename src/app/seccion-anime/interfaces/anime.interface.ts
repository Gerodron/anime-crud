
export interface animes {
    id?:         string;
    titulo:     string;
    genero:     string[];
    sinopsis:   string;
    temporadas: number;
    episodios:  number;
    estado:     Estado;
    estudio:    string;
    puntuacion: number;
}

export enum Estado {
    EnCurso = "En curso",
    Finalizado = "Finalizado",
}
