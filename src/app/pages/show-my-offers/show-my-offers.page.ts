import { Component, OnInit } from '@angular/core';
import { IDatabase } from 'src/app/interfaces/database-i';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-show-my-offers',
  templateUrl: './show-my-offers.page.html',
  styleUrls: ['./show-my-offers.page.scss'],
})
export class ShowMyOffersPage implements OnInit {

  constructor(public dataBase: IDatabase) { }

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
}
