import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('Form submit');
    console.log(this.user);
  }

}
