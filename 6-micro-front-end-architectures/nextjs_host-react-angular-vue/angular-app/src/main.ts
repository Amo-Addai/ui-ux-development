import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// ! updating for angular-app mounting

import { enableProdMode, NgZone } from '@angular/core'

true || enableProdMode() // * enable prod mode based on some 'environment?.production' value

class AngularApp extends HTMLElement {
  connectedCallback() {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch(err => console.error(err))
  }
}

customElements.define('angular-app', AngularApp)