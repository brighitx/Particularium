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
  reverseGeocodingResults:string="";

  constructor(public menuCtrl: MenuController, public geolocation: Geolocation, public geocoder: NativeGeocoder,
    public platform: Platform) {
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then((position) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        this.ReverseGeocoding(latitude, longitude);
      })
    })
  }

  ReverseGeocoding(latitude, longitude) {
    var options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 1
    }
    this.geocoder.reverseGeocode(latitude, longitude, options).then((results)=>{
      this.reverseGeocodingResults = JSON.stringify(results[0]);
    })
  }

}
