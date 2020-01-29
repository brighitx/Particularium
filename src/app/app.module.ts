import { IDatabase } from './interfaces/database-i';
import { MockGeolocalitationService } from './mock/mock-geo/mock-geolocalitation.service';
import { AdapterGeolocalitationService } from './services/adapterGeo/adapter-geolocalitation.service';
import { MockDataBaseService } from 'src/app/mock/mock-data-base.service';
import { AdapterDataBaseService } from './services/adapter-data-base.service';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule,
    ComponentsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    AngularFirestore,
    AngularFireAuthModule,
    // EN ESTA LINEA CAMBIO SI QUIERO USAR EL MOCK O EL ADAPTERDATABASESERVICE
    { provide: IDatabase , useClass: AdapterDataBaseService},
    { provide: AdapterGeolocalitationService, useClass: MockGeolocalitationService},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
