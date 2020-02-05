import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IDatabase } from 'src/app/interfaces/database-i';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.page.html',
  styleUrls: ['./update-offer.page.scss'],
})
export class UpdateOfferPage implements OnInit {
  @Input() idOffer: string;
  @Input() model: string;
  @Input() level: string;
  @Input() subject: string;
  @Input() mobility: boolean;
  @Input() timetable: string;

  constructor(private modalCtrl: ModalController, public dataBase: IDatabase) {

  }
  updateOffer() {
    this.dataBase.updateOffer(this.idOffer, this.subject, this.level, this.model, this.mobility, this.timetable);
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
  }

}
