import { Routes } from '@angular/router';
import { RootComponent } from './root/root.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    pathMatch: 'full'
  },
  {
    path: 'cars',
    loadChildren: () => import('./movies/movies.module')
        .then(m => m.MoviesModule)
  }
];
