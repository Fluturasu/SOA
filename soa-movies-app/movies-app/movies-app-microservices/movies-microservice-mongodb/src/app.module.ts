import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://movies_db_mongodb:27017/movies-app', {
      autoCreate: true
    }),
    MovieModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
