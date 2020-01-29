import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IDatabase } from 'src/app/interfaces/database-i';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public database: IDatabase, public router: Router) {
   }
  private checkUserStudent(): boolean {
    if (this.database.isLogin()) {
      return this.database.checkUserStudent();
    }
    return true;
  }
  private signOut(){
    this.database.signOut();
    this.router.navigate(['start']);
  }
  ngOnInit() {}

}
