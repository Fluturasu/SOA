import { Routes } from "@angular/router";
import { AddMovieComponent } from "./add-movie/add-movie.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'add-movie'
  },
  {
    path: 'add-movie',
    component: AddMovieComponent
  }
];
