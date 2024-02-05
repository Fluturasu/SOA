import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { routes } from "./movies.routes";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { MovieService } from "./movies.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    MoviesListComponent
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule { }
