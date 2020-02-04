import { IDatabase } from 'src/app/interfaces/database-i';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.page.html',
  styleUrls: ['./create-offer.page.scss'],
})
export class CreateOfferPage implements OnInit {
  private model: string;
  private level: string;
  private subject: string;
  private timetable: string;
  private mobility: boolean;

  constructor(private dataBase: IDatabase, public router: Router) { }

  ngOnInit() {
  }

  isValidForm(): boolean {
    return true;
  }
  createOffer() {
    this.dataBase.createOffer(this.subject, this.level, this.model, this.mobility, this.timetable);
    this.router.navigate(['show-my-offers']);
  }
}
