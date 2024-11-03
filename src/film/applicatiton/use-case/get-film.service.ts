import { CustomInjectable } from "../../../common/dependecy-injection/injectable";
import { CreateFilmDto } from "../dto/create-film.dto";
import { Film } from "../../domain/entities/film.entity";
import { FilmRepository } from "../../domain/repository/film.repository";

@CustomInjectable()
export class GetFilmService {
    constructor(private readonly repository: FilmRepository){}

    async execute(id: string): Promise<Film>{
        const film = await this.repository.getById(id);
        return film;
    }
}