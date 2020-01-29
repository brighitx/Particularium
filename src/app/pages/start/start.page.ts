
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
      texto: 'Un viaje muy largo se inicia con un solo paso'
    },
    { texto: 'Te presentamos la mejor aplicación para aprender' },
    { texto: 'Donde conoceras a los mejores docentes y alumnos.' }
  ];
  constructor(public menuCtrl: MenuController) {}
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}

interface SlideTexto {
  texto: string;
}
