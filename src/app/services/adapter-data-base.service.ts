import { ManagerUserService } from './managerUser/manager-user.service';
import { ManagerOfferService } from './managerOffer/manager-offer.service';
import { ManagerDemandService } from './managerDemand/manager-demand.service';

import { Injectable } from '@angular/core';
import { Demand } from '../core/model/demand';
import { Offer } from '../core/model/offer';
import { User } from '../core/model/user';
import { IDatabase } from '../interfaces/database-i';

@Injectable({
  providedIn: 'root'
})

export class AdapterDataBaseService implements IDatabase {
  
  constructor(private managerUser: ManagerUserService,
              private managerDemand: ManagerDemandService,
              private managerOffer: ManagerOfferService) {
  }
  public checkUserStudent(): boolean {
    return this.managerUser.checkUserStudent();
  }
  private getIdUserActive(): string {
    return this.managerUser.getIdUserActive();
  }
  public signUp(email: string, password: string): Promise<any> {
    return this.managerUser.signUp(email, password);
  }
  public signIn(email: string, password: string): Promise<any> {
    return this.managerUser.signIn(email, password);
  }
  public createDemand(subject: string, level: string, model: string, mobility: boolean) {
    this.managerDemand.createDemand(subject, level, model, mobility, this.getIdUserActive());
  }
  public createOffer(subject: string, level: string, model: string, mobility: boolean, timetable: string) {
    this.managerOffer.createOffer(subject, level, model, mobility, timetable, this.getIdUserActive());
  }
  public getAllOffers(): Array<Offer> {
    return this.managerOffer.getAllOffer();
  }
  public getAllDemands(): Array<Demand> {
    return this.managerDemand.getAllDemands();
  }
  public getMyDemandOffer(): Array<Demand | Offer> {
    if (this.checkUserStudent()) {
      return this.managerDemand.getMyDemand(this.getIdUserActive());
    }
    return this.managerOffer.getMyOffer(this.getIdUserActive());
  }
  public takeUser(uid: string): User {
    return this.managerUser.takeUser(uid);
  }
  public updateUser(nameUser: string, tittleUser = 'Student', addressUser = 'Student') {
    this.managerUser.updateUser(nameUser, tittleUser, addressUser);
  }
  public isLogin(): boolean {
    return this.managerUser.isLogin();
  }
  public signOut(): void {
    this.managerUser.signOut();
  }
  public deleteOffer(id: string): void {
    this.managerOffer.delete(id);
  }
  public deleteDemand(id: string): void {
    this.managerDemand.delete(id);
  }
  public deleteUser(): void {
    this.managerUser.delete();
  }
}
