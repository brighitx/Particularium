import { Component, OnInit } from '@angular/core';

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

  constructor() { }

}

interface SlideTexto {
  texto: string;
}
