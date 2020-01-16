import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideTexto: SlideTexto[] = [
    {
      texto: "Un viaje muy largo se inicia con un sólo paso"
    },
    { texto: "Miau miau miau miau miau" },
    { texto: "Miau miau miau miau miau" }
  ];

  constructor() { }

}

interface SlideTexto {
  texto: string;
}
