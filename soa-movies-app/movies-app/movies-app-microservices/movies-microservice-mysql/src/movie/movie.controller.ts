import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { ClientProxy } from "@nestjs/microservices";
import { MovieService } from "./movie.service";
import { Movie } from "./movie.entity";

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService, 
                @Inject("MOVIE_SERVICE") private readonly clientProxy: ClientProxy) {
    }

    @Get()
    @UseGuards(AuthGuard)
    async getAll(): Promise<Movie[]> {
        return await this.movieService.getAllMovies();
    }

    @Get('/:id')
    @UseGuards(AuthGuard)
    async getOne(@Param('id') id: number): Promise<Movie> {
        return await this.movieService.getMovieById(+id);
    }

    @Post()
    @UseGuards(AuthGuard)
    async create(@Body() movie: Movie): Promise<Movie> {
        const createdMovie = await this.movieService.createMovie(movie);
        this.clientProxy.emit('movie_created', createdMovie);
        return createdMovie;
    }

    @Put()
    @UseGuards(AuthGuard)
    async update(@Body() movie: Movie): Promise<Movie> {
        const updatedMovie = await this.movieService.updateMovie(movie);
        this.clientProxy.emit('movie_updated', updatedMovie);
        return updatedMovie;
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<void> {
        await this.movieService.deleteMovie(+id);
        this.clientProxy.emit('movie_deleted', id);
    }
}