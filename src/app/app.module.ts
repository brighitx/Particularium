import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { IDatabase } from './interfaces/database-i';
import { AdapterDataBaseService } from './services/adapterDataBase/adapter-data-base.service';
import { MockDataBaseService } from 'src/app/mock/mock-data-base/mock-data-base.service';

import { IGeolocation } from 'src/app/interfaces/geolocation-i';
import { AdapterGeolocalitationService } from './services/adapterGeo/adapter-geolocalitation.service';
import { MockGeolocalitationService } from './mock/mock-geo/mock-geolocalitation.service';

import { ICamera } from './interfaces/camera-i';
import { AdapterCameraService } from './services/adapterCamera/adapter-camera.service';
import { MockCameraService } from './mock/mock-camera/mock-camera.service';

import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FirestoreSettingsToken, AngularFirestore } from '@angular/fire/firestore';
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },

    // EN ESTA LINEA CAMBIO SI QUIERO USAR EL MOCK O EL ADAPTERDATABASESERVICE
    { provide: IDatabase , useClass: AdapterDataBaseService},
    { provide: IGeolocation, useClass: AdapterGeolocalitationService},
    { provide: ICamera, useClass: MockCameraService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
