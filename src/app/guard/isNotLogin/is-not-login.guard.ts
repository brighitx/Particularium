import { AdapterDataBaseService } from 'src/app/services/adapter-data-base.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsNotLoginGuard implements CanActivate {

  constructor(private dataBase: AdapterDataBaseService) { }

  canActivate(): boolean {
    return !this.dataBase.isLogin();
  }

}
