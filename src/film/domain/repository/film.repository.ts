import { Film, FilmAttributes } from "../entities/film.entity";

export abstract class FilmRepository {
    abstract create(user: FilmAttributes): Promise<Film>;
    abstract getById(id: string): Promise<Film | null>;
    abstract getAll():Promise<Film[] | null>;
}