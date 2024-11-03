import { Body, Controller, HttpStatus, Logger, Post } from '@nestjs/common';
import { CreateFilmHttpDto } from './dto/crete-film-http.dto';
import { CreateFilmService } from '../../applicatiton/use-case/create-film.service';
import { ResponseDto } from '../../../common/dto/response.dto';
import { Film } from '../../domain/entities/film.entity';


@Controller('film-post')
export class CreateFilmController {
    constructor(private service: CreateFilmService){}

    @Post()
    async run(@Body() dto: CreateFilmHttpDto): Promise<object> {
        try {
            
            const data = await this.service.execute(dto);
            return ResponseDto.success<Film>(data, "Operación satisfactoria", HttpStatus.CREATED);
        } catch (error) {
            return ResponseDto.error<Film>("Error en Peliculas", error.message, HttpStatus.BAD_REQUEST);
        }
    }
}