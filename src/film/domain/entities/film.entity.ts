export interface FilmAttributes {
    id?:string;
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

export class Film {
    private attributes: FilmAttributes;

    private constructor(attributes: FilmAttributes) {
        this.attributes = { ...attributes };
    }

    static create(attributes: Partial<FilmAttributes> & {
        id?:string;
        titulo: string;
        episodioId: number;
        aperturaTexto: string;
        director: string;
        productor: string;
        fechaEstreno: string;
    }): Film {
        const defaultAttributes: FilmAttributes = {
            id: attributes.id,
            titulo: attributes.titulo,
            episodioId: attributes.episodioId,
            aperturaTexto: attributes.aperturaTexto,
            director: attributes.director,
            productor: attributes.productor,
            fechaEstreno: attributes.fechaEstreno,
            especies: attributes.especies ?? [],
            navesEspaciales: attributes.navesEspaciales ?? [],
            vehiculos: attributes.vehiculos ?? [],
            personajes: attributes.personajes ?? [],
            planetas: attributes.planetas ?? [],
        };

        return new Film(defaultAttributes);
    }

    toValue(): FilmAttributes {
        return { ...this.attributes };
    }
}
