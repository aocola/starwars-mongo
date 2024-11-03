import { CustomInjectable } from "../../../common/dependecy-injection/injectable";
import { Film } from "../../domain/entities/film.entity";
import { FilmRepository } from "../../domain/repository/film.repository";

@CustomInjectable()
export class GetFilmAllService {
    constructor(private readonly repository: FilmRepository){}

    async execute(): Promise<Film[]>{
        
        const films = await this.repository.getAll();
        return films;
    }
}