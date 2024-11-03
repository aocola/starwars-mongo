import { InjectModel } from "@nestjs/mongoose";
import { CustomInjectable } from "../../../../common/dependecy-injection/injectable";
import { FilmAttributes, Film } from "../../../domain/entities/film.entity";
import { FilmRepository } from "../../../domain/repository/film.repository";
import { Model } from "mongoose";
import { Logger } from "@nestjs/common";


const logger = new Logger('ServerMain-Controller');

@CustomInjectable()
export class MongoFilmRepository implements FilmRepository {

    constructor(
        @InjectModel(Film.name) private filmModel: Model<Film>) {}

    async create(film: FilmAttributes): Promise<Film> {
        const document = await new this.filmModel(film).save();
        return this.mapToEntity(document);
    }
    async getById(id: string): Promise<Film | null> {
        const document = await this.filmModel.findById(id);
        return document ? this.mapToEntity(document) : null;
    }
    async getAll(): Promise<Film[] | null> {
        const documents = await this.filmModel.find().exec();
        return documents.map(document => this.mapToEntity(document));
    }

    private mapToEntity(document: any): Film {
        return Film.create({
            id:document.id,
            titulo: document.titulo,
            episodioId: document.episodioId,
            aperturaTexto: document.aperturaTexto,
            director: document.director,
            productor: document.productor,
            fechaEstreno: document.fechaEstreno,
            especies: document.especies ?? [],
            navesEspaciales: document.navesEspaciales ?? [],
            vehiculos: document.vehiculos ?? [],
            personajes: document.personajes ?? [],
            planetas: document.planetas ?? []
        });
    }

}