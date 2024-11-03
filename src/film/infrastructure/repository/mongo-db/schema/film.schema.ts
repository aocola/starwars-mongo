import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Film {
  
  @Prop({ required: true })
  titulo: string;
  
  @Prop({ required: true })
  episodioId: number;
  
  @Prop({ required: true })
  aperturaTexto: string;
  
  @Prop({ required: true })
  director: string;
  
  @Prop({ required: true })
  productor: string;
  
  @Prop({ required: true })
  fechaEstreno: string;
  
  @Prop({ type: [String], required: true })
  especies: string[];
  
  @Prop({ type: [String], required: true })
  navesEspaciales: string[];
  
  @Prop({ type: [String], required: true })
  vehiculos: string[];
  
  @Prop({ type: [String], required: true })
  personajes: string[];
  
  @Prop({ type: [String], required: true })
  planetas: string[];
}

export const FilmSchema = SchemaFactory.createForClass(Film);

export type FilmDocument = HydratedDocument<Film>;
