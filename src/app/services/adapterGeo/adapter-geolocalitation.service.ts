import { Injectable } from '@angular/core';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class AdapterGeolocalitationService {
  public reverseGeocodingResults = '';
  public geoLocality = '';
  public geoProvince = '';
  public geoAutonomousCommunity = '';
  public geoCountryCode = '';
  public geoUbication = '';

  constructor(
    public geolocation: Geolocation,
    public geocoder: NativeGeocoder) { }

  async getUserLocation(): Promise<string> {
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    this.ReverseGeocoding(myLatLng.lat, myLatLng.lng);
    return new Promise<string>((response) => {
      response(this.geoUbication);
    });
  }
  ReverseGeocoding(latitude, longitude) {
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 1
    };
    this.geocoder.reverseGeocode(latitude, longitude, options).then((results) => {
      this.reverseGeocodingResults = JSON.stringify(results[0]);
      this.geoLocality = results[0].locality;
      this.geoProvince = results[0].subAdministrativeArea;
      this.geoAutonomousCommunity = results[0].administrativeArea;
      this.geoCountryCode = results[0].countryCode;
      this.geoUbication = this.geoLocality + ',' + this.geoProvince + ', ' + this.geoAutonomousCommunity + ', ' + this.geoCountryCode;
    });
  }
}
