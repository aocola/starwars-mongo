import { CustomInjectable } from "../../../common/dependecy-injection/injectable";
import { CreateFilmDto } from "../dto/create-film.dto";
import { Film } from "../../domain/entities/film.entity";
import { FilmRepository } from "../../domain/repository/film.repository";

@CustomInjectable()
export class CreateFilmService {
    constructor(private readonly repository: FilmRepository){}

    async execute(dto: CreateFilmDto): Promise<Film>{
        const filmEntity = Film.create(dto);
        const filmData = filmEntity.toValue();
        const savedFilm = await this.repository.create(filmData);
        return savedFilm;
    }
}