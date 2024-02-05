import { Injectable } from "@nestjs/common";
import { Movie } from "./movie.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class MovieService {
    constructor(@InjectModel(Movie.name) private readonly movieModel: Model<Movie>) {}
    
    async getAllMovies(): Promise<Movie[]> {
        return this.movieModel.find().exec();
    }

    async getMovieById(movieId: number): Promise<Movie> {
        return this.movieModel.findOne({ id: movieId }).exec();
    }

    async createMovie(movie: Movie): Promise<Movie> {
        const newMovie = new this.movieModel(movie);
        return newMovie.save();
    }

    async updateMovie(movie: Movie): Promise<Movie> {
        return this.movieModel.findOneAndUpdate({ id: movie.id }, movie).exec();
    }

    async deleteMovie(movieId: number): Promise<Movie> {
        return this.movieModel.findOneAndDelete({ id: movieId }).exec();
    }
}