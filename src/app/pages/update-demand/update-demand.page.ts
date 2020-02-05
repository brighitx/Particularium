import { IDatabase } from 'src/app/interfaces/database-i';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-demand',
  templateUrl: './update-demand.page.html',
  styleUrls: ['./update-demand.page.scss'],
})
export class UpdateDemandPage implements OnInit {
  @Input() idDemand: string;
  @Input() model: string;
  @Input() level: string;
  @Input() subject: string;
  @Input() mobility: boolean;

  constructor(private modalCtrl: ModalController, public dataBase: IDatabase) {

  }

  updateDemand() {
    this.dataBase.updateDemand(this.idDemand, this.subject, this.level, this.model, this.mobility);
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
