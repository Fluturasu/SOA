import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Movie } from "./movie.entity";

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie) private readonly movieRepository: Repository<Movie>
    ) {
    }

    async getAllMovies(): Promise<Movie[]> {
        return await this.movieRepository.find();
    }

    async getMovieById(movieId: number): Promise<Movie> {
        return await this.movieRepository.findOneBy({ id: movieId });
    }

    async createMovie(movie: Movie): Promise<Movie> {
        return await this.movieRepository.save(movie);
    }

    async updateMovie(movie: Movie): Promise<Movie> {
        await this.movieRepository.update(movie.id, movie);
        return this.movieRepository.findOneBy({ id: movie.id });
    }

    async deleteMovie(movieId: number): Promise<void> {
        await this.movieRepository.delete({ id: movieId });
    }
}