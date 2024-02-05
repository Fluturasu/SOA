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
                urls: ['amqps://zmfwdrpp:elIhm4tjtin_RaEuMY6LIKGwZ3f_-jSm@gull.rmq.cloudamqp.com/zmfwdrpp'],
                queue: 'cars-queue',
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
