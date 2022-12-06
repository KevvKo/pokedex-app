import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


const onDeviceReady = ()  => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', onDeviceReady, false);