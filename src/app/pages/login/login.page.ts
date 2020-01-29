import { AdapterDataBaseService } from './../../services/adapter-data-base.service';
import { Component, OnInit } from '@angular/core';
import { MockDataBaseService } from 'src/app/mock/mock-data-base.service';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IDatabase } from 'src/app/interfaces/database-i';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password: ''
  };
  constructor(public dataBase: IDatabase, public router: Router, public menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }
  onSubmit() {
    this.dataBase.signIn(this.user.email, this.user.password).then(() => {
      this.router.navigate(['stream']);
    }).catch(() => {
    });
  }

}
