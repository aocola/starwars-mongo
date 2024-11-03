import { Module } from '@nestjs/common';
import { FilmModule } from './film/film.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [FilmModule,
    MongooseModule.forRoot(
      `<MONGO_DB_URL>`
      ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
