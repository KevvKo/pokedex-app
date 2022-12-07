import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-camera-button',
  templateUrl: './camera-button.component.html',
  styleUrls: ['./camera-button.component.css']
})
export class CameraButtonComponent {

  camera: any;

  constructor(private picture: CameraService) {}


  takePhoto(): void {
    this.picture.takePhoto();
  }
}
