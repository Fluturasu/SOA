import { Routes } from "@angular/router";
import { MoviesListComponent } from "./movies-list/movies-list.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies-list',
  },
  {
    path: 'movies-list',
    component: MoviesListComponent
  }
];
