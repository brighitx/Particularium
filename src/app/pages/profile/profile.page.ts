
import { AdapterGeolocalitationService } from './../../services/adapterGeo/adapter-geolocalitation.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import { MenuController, Platform } from '@ionic/angular';
import { IDatabase } from 'src/app/interfaces/database-i';


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
              public dataBase: IDatabase,
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
