import {
    IsNotEmpty,
    IsAlphanumeric,
    IsNumber,
    IsString,
    IsArray,
    IsDateString,
  } from 'class-validator';
  
  export class CreateFilmHttpDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;
  
    @IsNumber()
    @IsNotEmpty()
    episodioId: number;
  
    @IsString()
    @IsNotEmpty()
    aperturaTexto: string;
  
    @IsString()
    @IsNotEmpty()
    director: string;
  
    @IsString()
    @IsNotEmpty()
    productor: string;
  
    @IsDateString()
    @IsNotEmpty()
    fechaEstreno: string;
  
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    especies: string[];
  
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    navesEspaciales: string[];
  
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    vehiculos: string[];
  
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    personajes: string[];
  
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    planetas: string[];
  }
  