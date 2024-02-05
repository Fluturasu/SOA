import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Movie } from './movie.entity';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Movie]),
        ClientsModule.register([
          {
            name: 'MOVIE_SERVICE',
            transport: Transport.RMQ,
            options: {
              urls: ['amqps://hiqsflmj:BdG0E9GhqGzExmOLEFucXdNKIIMCZBgS@crow.rmq.cloudamqp.com/hiqsflmj'],
              queue: 'movies-queue2',
              queueOptions: {
                  durable: false
              },
          },
        },
      ])
    ],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
