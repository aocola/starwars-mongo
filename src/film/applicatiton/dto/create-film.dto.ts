export interface CreateFilmDto {
    titulo: string;
    episodioId: number;
    aperturaTexto: string;
    director: string;
    productor: string;
    fechaEstreno: string;
    especies: string[];
    navesEspaciales: string[];
    vehiculos: string[];
    personajes: string[];
    planetas: string[];
}
