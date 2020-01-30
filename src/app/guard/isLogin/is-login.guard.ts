import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IDatabase } from 'src/app/interfaces/database-i';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {

  constructor(private dataBase: IDatabase, private router: Router) { }

  canActivate(): boolean {
    if (!this.dataBase.isLogin()) {
      this.router.navigate(['start']);
      return false;
    }
    return true;
  }

}
