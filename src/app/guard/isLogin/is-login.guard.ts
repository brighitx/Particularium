import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdapterDataBaseService } from 'src/app/services/adapter-data-base.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {

  constructor(private dataBase: AdapterDataBaseService, private router: Router) { }

  canActivate(): boolean {
    if (!this.dataBase.isLogin()) {
      this.router.navigate(['start']);
      return false;
    }
    return true;
  }

}
