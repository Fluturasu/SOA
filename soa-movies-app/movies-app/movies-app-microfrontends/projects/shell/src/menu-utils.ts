import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { routes } from './app/app.routes';
import { Microfrontend } from './microfrontends/microfrontend';

export function buildRoutes(options: Microfrontend[]): Routes {

    const lazyRoutes: Routes = options.map(o => ({
        path: o.routePath,
        loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
    }));

    return [...routes, ...lazyRoutes];
}
