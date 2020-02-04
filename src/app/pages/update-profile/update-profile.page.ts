import { IDatabase } from 'src/app/interfaces/database-i';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  public name: string;
  public email: string;
  constructor(public dataBase: IDatabase) {
    this.name = this.dataBase.takeCurrentUser().name;
    this.email = this.dataBase.takeCurrentUser().email;
  }
  public update() {
    this.dataBase.updatePersonalUser(this.name, this.email);
  }

  ngOnInit() {
  }
  onSubmit() {
  }
}
