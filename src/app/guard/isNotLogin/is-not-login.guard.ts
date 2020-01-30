import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { IDatabase } from 'src/app/interfaces/database-i';

@Injectable({
  providedIn: 'root'
})
export class IsNotLoginGuard implements CanActivate {

  constructor(private dataBase: IDatabase) { }

  canActivate(): boolean {
    return !this.dataBase.isLogin();
  }

}
