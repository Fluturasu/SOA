import { Component, OnInit, inject } from '@angular/core';
import { Movie } from '../../movie';
import { AddMovieService } from '../addMovie.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { config } from 'rxjs';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent implements OnInit {
  title: string = "";
  genre: string = "";
  year: number | null = null;
  synopsis: string = "";
  image: string = "";

  constructor(private addMovieService: AddMovieService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  addMovie() {
    const movie : Movie = {
      title: this.title,
      genre: this.genre,
      year: this.year ?? 0,
      synopsis: this.synopsis,
      image: this.image,
    };

    this.addMovieService.addMovie(movie).subscribe({
      next: (movie) => {
        if (movie !== null) {
          this.title = "";
          this.genre = "";
          this.year = null;
          this.synopsis = "";
          this.image = "";
        }
      },
      error: (error) => console.error(error)
    })
  }
}
