import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


  /*
    Module=> where declaration happen
    Component=> where html css & logics
    Pipe/Filter=> This help munpulate date on run time
    Services=> Help to connect to third party
    Router=> help for navigation
    RouterGaurds=> Auth the routing


    main module
    main component
  */
