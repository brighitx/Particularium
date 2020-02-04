import { IDatabase } from 'src/app/interfaces/database-i';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-demand',
  templateUrl: './create-demand.page.html',
  styleUrls: ['./create-demand.page.scss'],
})
export class CreateDemandPage implements OnInit {
  private model: string;
  private level: string;
  private subject: string;
  private mobility: boolean;

  constructor(private dataBase: IDatabase, public router: Router) { }

  ngOnInit() {
  }

  isValidForm(): boolean {
    return true;
  }
  createDemand() {
    this.dataBase.createDemand(this.subject, this.level, this.model, this.mobility);
    this.router.navigate(['stream']);
  }

}
