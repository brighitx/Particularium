import { Component, OnInit } from '@angular/core';
import { MockDataBaseService } from 'src/app/mock/mock-data-base.service';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';


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
  constructor(public dataBase: MockDataBaseService, public router: Router, public menuCtrl: MenuController) { }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }
  onSubmit() {
    this.dataBase.signIn(this.user.email, this.user.password).then(() => {
      console.log('creado');
      const navigationExtras: NavigationExtras = {
        state: {
          email: this.user.email,
          password: this.user.password
        }
      };
      this.router.navigate(['profile'], navigationExtras);
    }).catch(() => {
      console.log('fallo');
    });
  }

}
