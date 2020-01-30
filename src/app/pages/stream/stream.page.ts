import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AdapterDataBaseService } from 'src/app/services/adapter-data-base.service';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.page.html',
  styleUrls: ['./stream.page.scss'],
})
export class StreamPage implements OnInit {

  constructor(public dataBase: AdapterDataBaseService, private menuCtrl: MenuController) { }

  getData() {
    console.log(this.dataBase.checkUserStudent())
    if (this.dataBase.checkUserStudent()) {
      return this.dataBase.getAllOffers();
    }
    return this.dataBase.getAllDemands();
  }
  checkUser() {
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
