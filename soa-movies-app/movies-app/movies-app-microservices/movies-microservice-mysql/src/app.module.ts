import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'movies_db_mysql', 
      port: 3306,
      username: 'root',
      password: 'Alarak19*',
      logging: true,
      database: 'movies-app',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MovieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
