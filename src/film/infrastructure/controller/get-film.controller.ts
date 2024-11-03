import { Body, Controller, Get, HttpStatus, Logger, Param } from '@nestjs/common';
import { GetFilmService } from '../../applicatiton/use-case/get-film.service';
import { GetFilmByIdHttpDto } from './dto/get-film-http.dto';
import { Film } from '../../domain/entities/film.entity';
import { ResponseDto } from '../../../common/dto/response.dto';

const logger = new Logger('ServerMain-Controller');

@Controller('film-post')
export class GetFilmController {
    constructor(private service: GetFilmService){}

    @Get(':id')
    async run(@Param() dto: GetFilmByIdHttpDto): Promise<ResponseDto<object>> {
        try {
            const data = await this.service.execute(dto.id);
            return ResponseDto.success<Film>(data, "Operación satisfactoria", HttpStatus.FOUND);
        } catch (error) {
            return ResponseDto.error<Film>("Error en Especies", error.message, HttpStatus.BAD_REQUEST);
        }
    }
}