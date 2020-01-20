import { Component, OnInit } from '@angular/core';
import { MockDataBaseService } from 'src/app/mock/mock-data-base.service';

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
  constructor(public dataBase: MockDataBaseService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.dataBase.signIn(this.user.email, this.user.password).then(() => {
      console.log('creado');
    }).catch(() => {
      console.log('fallo');
    });
    console.log('Form submit');
    console.log(this.user);
  }

}
