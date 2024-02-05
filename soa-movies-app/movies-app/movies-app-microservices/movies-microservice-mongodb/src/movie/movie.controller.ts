import { Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';

@Controller('movies')
export class MovieController {
    constructor(private movieService: MovieService) {}

    @Get()
    async getAll(): Promise<Movie[]> {
        return await this.movieService.getAllMovies();
    }

    @EventPattern('movie_created')
    async create(movie: Movie): Promise<Movie> {
        return await this.movieService.createMovie(movie);
    }

    @EventPattern('movie_updated')
    async update(movie: Movie): Promise<Movie> {
        return await this.movieService.updateMovie(movie);
    }

    @EventPattern('movie_deleted')
    async delete(movieId: number): Promise<any> {
        return await this.movieService.deleteMovie(movieId);
    }
}