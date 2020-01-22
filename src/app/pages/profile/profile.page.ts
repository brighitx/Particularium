import { Component, OnInit } from '@angular/core';

import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MenuController, Platform } from '@ionic/angular';


declare var google;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  profesor: boolean;
  alumno: boolean;

  estado() {
    console.log('Nuevo estado:' + this.profesor);
  }

  enlace(){
    
  }

  reverseGeocodingResults: string = '';
  geoLocality: string = '';
  geoProvince: string = '';
  geoAutonomousCommunity: string = '';
  geoCountryCode: string = '';
  geoUbication: string = '';
  constructor(public menuCtrl: MenuController, public geolocation: Geolocation, public geocoder: NativeGeocoder) {

  }

  async getUserLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    this.ReverseGeocoding(myLatLng.lat, myLatLng.lng);
  }

  ReverseGeocoding(latitude, longitude) {
    var options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 1
    }
    this.geocoder.reverseGeocode(latitude, longitude, options).then((results) => {
      this.reverseGeocodingResults = JSON.stringify(results[0]);
      this.geoLocality = results[0].locality;
      this.geoProvince = results[0].subAdministrativeArea;
      this.geoAutonomousCommunity = results[0].administrativeArea;
      this.geoCountryCode = results[0].countryCode;
      this.geoUbication = this.geoLocality + ", " + this.geoProvince + ", " + this.geoAutonomousCommunity + ", " + this.geoCountryCode;
    })
  }

}
