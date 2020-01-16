import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre: string;

  usuario = {
    email: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmitTemplate() {
    console.log('Form submit');
    console.log(this.usuario);
  }

}
