import { IsNotEmpty } from 'class-validator';

export class GetFilmByIdHttpDto {
  @IsNotEmpty()
  id: string;
}
