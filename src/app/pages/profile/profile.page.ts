import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MenuController, Platform } from '@ionic/angular';
import { AdapterDataBaseService } from 'src/app/services/adapter-data-base.service';
import { AdapterGeolocalitationService } from 'src/app/services/adapterGeo/adapter-geolocalitation.service';

declare var google;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  public teacher: boolean;

  public nameUserStudent: string;
  public nameUserTeacher: string;
  public address: string;
  public tittle: string;

  constructor(public menuCtrl: MenuController,
              public router: Router,
              public dataBase: AdapterDataBaseService,
              public geo: AdapterGeolocalitationService) {

  }

  estado() {
    console.log('Nuevo estado:' + this.teacher);
  }

  okButton(): boolean {
    if (this.teacher) {
      if (this.nameUserTeacher !== undefined) {
        if (this.tittle !== undefined) {
          if (this.address !== undefined) { return true; }
        }
      }
    } else {
      if (this.nameUserStudent !== undefined) { return true; }
    }
    return false;
  }

  crearPerfil() {
    if (this.teacher) {
      this.dataBase.updateUser(this.nameUserTeacher, this.tittle, this.address);
    } else {
      this.dataBase.updateUser(this.nameUserStudent);
    }
    this.router.navigate(['stream']);
  }
  async getUserLocation() {
    this.geo.getUserLocation()
      .then((resolve) => {
        this.address = resolve;
      })
      .catch();
  }
}
