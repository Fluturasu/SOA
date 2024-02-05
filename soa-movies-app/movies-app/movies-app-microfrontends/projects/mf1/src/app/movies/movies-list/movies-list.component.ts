import { Component } from '@angular/core';
import { MovieService } from '../movies.service';
import { Movie } from '../../movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  movies : Movie[] = [];

  constructor(private moviesService: MovieService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe({
      next: (movies) => this.movies = movies,
      error: (error) => console.error(error),
    })
  }

  delete(id: number): void {
    this.moviesService.deleteMovie(id).subscribe({
      next: () => this.movies = this.movies.filter(car => car.id != id),
      error: (error) => console.error(error),
    })
  }
}
