import { Body, Controller, Get, HttpStatus, Logger, Post } from '@nestjs/common';
import { GetFilmAllService } from '../../applicatiton/use-case/get-all-film.service';
import { ResponseDto } from '../../../common/dto/response.dto';
import { Film } from '../../domain/entities/film.entity';


const logger = new Logger('ServerMain-Controller');

@Controller('film-post')
export class GetFilmAllController {
    constructor(private service: GetFilmAllService){}

    @Get()
    async run(): Promise<ResponseDto<object>> {
        try {
            const data = await this.service.execute();
            return ResponseDto.success<Film[]>(data, "Operación satisfactoria", HttpStatus.FOUND);
        } catch (error) {
            return ResponseDto.error<Film[]>("Error en Peliculas", error.message, HttpStatus.BAD_REQUEST);
        }
    }
}