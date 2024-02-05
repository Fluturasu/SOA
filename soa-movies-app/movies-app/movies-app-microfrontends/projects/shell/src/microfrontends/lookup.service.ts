import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './Module',

                displayName: 'Movies List',
                routePath: 'movies',
                ngModuleName: 'MoviesModule'
            },
            {
                type: 'module',
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                exposedModule: './Module',

                displayName: 'Add Movie',
                routePath: 'add-movie',
                ngModuleName: 'AddMovieModule'
            }
        ] as Microfrontend[]);
    }
}
