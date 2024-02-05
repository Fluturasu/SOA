import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { routes } from "./addMovie.routes";
import { AddMovieService } from "./addMovie.service";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    TextFieldModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [AddMovieService],
  declarations: [
    AddMovieComponent
  ]
})
export class AddMovieModule { }
