import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage {
  slideTexto: SlideTexto[] = [
    {
      texto: "Un viaje muy largo se inicia con un sólo paso"
    },
    { texto: "Miau miau miau miau miau" },
    { texto: "Miau miau miau miau miau" }
  ];

  constructor(public menuCtrl: MenuController) { }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}


interface SlideTexto {
  texto: string;
}
