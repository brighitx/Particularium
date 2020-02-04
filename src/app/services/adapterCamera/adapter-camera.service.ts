import { CameraOptions } from './../../interfaces/i-camera-native/camera-options';
import { Camera } from '@ionic-native/camera/ngx';
import { Injectable } from '@angular/core';
import { ICamera } from 'src/app/interfaces/camera-i';

@Injectable({
  providedIn: 'root'
})
export class AdapterCameraService implements ICamera {
  public image = '';
  constructor(public camera: Camera) { }

  getImage(source: number) {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 720,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      sourceType: source
    };
    return new Promise((resolve, reject) => {
      this.camera.getPicture(options).then((result) => {
        resolve(result);
      }).catch((error) => reject('Ha ocurrido un error'));
    });
  }

}


