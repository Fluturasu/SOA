import { Routes } from '@angular/router';
import { RootComponent } from './root/root.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    pathMatch: 'full'
  },
  {
      path: 'add-movie',
      loadChildren: () => import('./addMovie/addMovie.module')
          .then(m => m.AddMovieModule)
  }
];
