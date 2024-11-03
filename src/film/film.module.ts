import { Module } from '@nestjs/common';
import { CreateFilmController } from './infrastructure/controller/create-film.controller';
import { GetFilmAllController } from './infrastructure/controller/get-film-all.controller';
import { GetFilmController } from './infrastructure/controller/get-film.controller';
import { CreateFilmService } from './applicatiton/use-case/create-film.service';
import { GetFilmAllService } from './applicatiton/use-case/get-all-film.service';
import { FilmRepository } from './domain/repository/film.repository';
import { MongoFilmRepository } from './infrastructure/repository/mongo-db/mongo-film.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Film } from './domain/entities/film.entity';
import { FilmSchema } from './infrastructure/repository/mongo-db/schema/film.schema';
import { GetFilmService } from './applicatiton/use-case/get-film.service';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: Film.name, schema: FilmSchema }]),
    ],
    controllers: [
        CreateFilmController,
        GetFilmAllController,
        GetFilmController,
    ],
    providers: [
        CreateFilmService,
        GetFilmAllService,
        GetFilmService,
        MongoFilmRepository, // Incluye MongoFilmRepository en providers
        {
            provide: FilmRepository,
            useExisting: MongoFilmRepository,
        },
    ],
    exports: [FilmRepository], // Exporta FilmRepository si necesitas usarlo en otros módulos
})
export class FilmModule {}
