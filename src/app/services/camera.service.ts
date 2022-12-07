import { Injectable, OnInit } from '@angular/core';

declare let navigator: any;

@Injectable({
  providedIn: 'root'
})

export class CameraService implements OnInit  {


  camera: any;

  constructor() { }

  ngOnInit(): void {
    this.camera = navigator.camera;
  }

  takePhoto(): void {
    navigator.camera.getPicture(this.onSuccess, this.onFailure);
  }

  private onSuccess(response: string){
    console.log(response);
  }

  private onFailure(response: string){
    console.error(response);
  }
}
