import { inject, Injectable, InjectionToken, OnInit } from '@angular/core';

declare let navigator: any;
export const CAMERA_TOKEN = new InjectionToken<any>('Cordova Camera API', {factory: () => navigator.camera});

@Injectable({
  providedIn: 'root'
})

export class CameraService  {

  camera: any = inject(CAMERA_TOKEN);

  takePhoto(): void {
    this.camera.getPicture(this.onSuccess, this.onFailure);
  }

  private onSuccess(response: string){
    console.log(response);
  }

  private onFailure(response: string){
    console.error(response);
  }
}
