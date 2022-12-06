import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

declare let window: any;
declare let device: any;

let onDeviceReady = () => {
  platformBrowserDynamic().bootstrapModule(AppModule);

  console.log(window.cordova)
  console.log(device.cordova)
  console.log(device.model)

};

if(window.corodva) document.addEventListener('deviceready', onDeviceReady, false);
onDeviceReady()