import { UpdateOfferPage } from './../update-offer/update-offer.page';
import { UpdateDemandPage } from './../update-demand/update-demand.page';
import { Component, OnInit } from '@angular/core';
import { IDatabase } from 'src/app/interfaces/database-i';
import { User } from 'src/app/core/model/user';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-show-my-offers',
  templateUrl: './show-my-offers.page.html',
  styleUrls: ['./show-my-offers.page.scss'],
})
export class ShowMyOffersPage implements OnInit {

  constructor(public dataBase: IDatabase, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  getData() {
    return this.dataBase.getMyDemandOffer();
  }
  getUser(uid: string): User {
    return this.dataBase.takeUser(uid);
  }
  checkUserStudent() {
    return this.dataBase.checkUserStudent();
  }
  delete(id: string) {
    if (this.checkUserStudent()) {

      this.dataBase.deleteDemand(id);
    } else {
      this.dataBase.deleteOffer(id);
    }
  }
  async openUpdate(id: string, modelIN: string, levelIN: string, subjectIN: string, mobilityIN: boolean, timetableIN?: string) {
    let modal;
    if (this.checkUserStudent()) {
      modal = await this.modalCtrl.create({
        component: UpdateDemandPage,
        componentProps: {
          idDemand: id,
          model: modelIN,
          level: levelIN,
          subject: subjectIN,
          mobility: mobilityIN
        }
      });
    } else {
      modal = await this.modalCtrl.create({
        component: UpdateOfferPage,
        componentProps: {
          idOffer: id,
          model: modelIN,
          level: levelIN,
          subject: subjectIN,
          mobility: mobilityIN,
          timetable: timetableIN
        }
      });
    }
    await modal.present();
  }
}
