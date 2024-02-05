import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Transport } from "@nestjs/microservices";

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: ['amqps://hiqsflmj:BdG0E9GhqGzExmOLEFucXdNKIIMCZBgS@crow.rmq.cloudamqp.com/hiqsflmj'],
            queue: 'movies-queue2',
            queueOptions: {
                durable: false
            },
        },
    });

    await app.listen().then(() => {
        console.log("Microservice is listening!")
    })
}

bootstrap();