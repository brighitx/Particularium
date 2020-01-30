import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { IDatabase } from 'src/app/interfaces/database-i';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.page.html',
  styleUrls: ['./stream.page.scss'],
})
export class StreamPage implements OnInit {

  constructor(public dataBase: IDatabase, private menuCtrl: MenuController) { }

  getData() {
    if (this.dataBase.checkUserStudent()) {
      return this.dataBase.getAllOffers();
    }
    return this.dataBase.getAllDemands();
  }
  checkUserStudent() {
    return this.dataBase.checkUserStudent();
  }
  getUser(uid: string): User {
    return this.dataBase.takeUser(uid);
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}
