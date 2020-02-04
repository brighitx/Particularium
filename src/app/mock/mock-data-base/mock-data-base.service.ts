import { Observable } from 'rxjs';
import { DemandBuilder } from '../../core/model/builders/demandBuilder';
import { OfferBuilder } from '../../core/model/builders/offerBuilder';
import { UserBuilder } from '../../core/model/builders/userBuilder';
import { Injectable } from '@angular/core';
import { User } from '../../core/model/user';
import { Offer } from '../../core/model/offer';
import { Demand } from '../../core/model/demand';
import { IDatabase } from '../../interfaces/database-i';

@Injectable({
  providedIn: 'root'
})
export class MockDataBaseService implements IDatabase {
  updateDemand(idDemand: string, subject: string, level: string, model: string, mobility: boolean) {
    throw new Error("Method not implemented.");
  }
  updateOffer(idOffer: string, subject: string, level: string, model: string, mobility: boolean, timetable: string) {
    throw new Error("Method not implemented.");
  }
  takeCurrentUser(): User {
    throw new Error("Method not implemented.");
  }
  updatePersonalUser(nameUser: string, email: string) {
    throw new Error("Method not implemented.");
  }
  updatePasswordUser(password: string) {
    throw new Error("Method not implemented.");
  }

  private login = false;
  private _userActive: User;
  private _users: Array<User>;
  private _offers: Array<Offer>;
  private _demands: Array<Demand>;
  private demandBuilder: DemandBuilder = new DemandBuilder();
  private offerBuilder: OfferBuilder = new OfferBuilder();
  private userBuilder: UserBuilder = new UserBuilder();

  constructor() {
    this.createUsers();
    this.createOffers();
    this.createDemands();
  }
  private createOffers() {
    this._offers = new Array<Offer>();
    const mySubject: string[] = ['Math', 'History', 'Physics', 'Spanish', 'Chemistry', 'English', 'German', 'Chinese', 'Japanese'];
    const myModel: string[] = ['single', 'Pair', 'Group', 'Pair', 'Single', 'Group', 'Single', 'Pair', 'Single'];
    const myMobility: boolean[] = [true, true, true, false, false, false, false, true, false];
    const myLevel: string[] = ['Early', 'Middle', 'High', 'Beginner', 'Common', 'Beginer', 'Low', 'Early', 'High'];
    for (let i = 0; i < this.users.length; i++) {
      this._offers.push(this.offerBuilder.restart()
      .subject(mySubject[i])
      .model(myModel[i])
      .mobility(myMobility[i])
      .level(myLevel[i])
      .build(this._users[i].id));
    }
  }
  private createDemands() {
    this._demands = new Array<Demand>();
    const myLevel: string[] = ['Advanced', 'Low', 'Advanced', 'Common', 'Beginner', 'Advanced', 'Middle'];
    const myMobility: boolean[] = [false, false, false, true, true, true, false];
    const myModel: string[] = ['Group', 'Single', 'Pair', 'Single', 'Group', 'Single', 'Pair'];
    const mySubject: string[] = ['Science', 'Programming', 'Economy', 'English', 'German', 'Literature', 'Boostrap'];
    for (let i = 0; i < this.users.length; i++) {
      this._demands.push(this.demandBuilder.restart()
      .level(myLevel[i])
      .mobility(myMobility[i])
      .model(myModel[i])
      .subject(mySubject[i])
      .build(this._users[i].id));
    }
  }
  private createUsers() {
    this._users = new Array<User>();
    const emails: string[] = ['userOne@ts.es', 'userTwo@ts.es', 'userThree@ts.es', 'userFour@ts.es', 'userFive@ts.es', 'adri@test.com'];
    const password: string[] = ['123456', '123456', '123456', '123456', '123456', '123456'];
    const tittle: string[] = ['Teacher', 'Student', 'Teacher', 'Student', 'Teacher', 'Student', 'Teacher'];
    const names: string[] = ['UserOne', 'UserTwo', 'UserThree', 'UserFour', 'UserFive', 'Adri'];
    const adress: string[] = ['NULA', 'NULA', 'NULA', 'NULA', 'NULA', 'NULA'];
    for (let i = 0; i < emails.length; i++) {
      this._users.push(this.userBuilder.restart().email(emails[i]).password(password[i])
        .tittle(tittle[i]).name(names[i]).address(adress[i]).build());
    }
  }

  signUp(email: string, password: string): Promise<any> {
    return new Promise((resolver, rejected) => {
      const user = this.userBuilder.restart().email(email).password(password).build();
      this._users.push(user);
      if (user != null) {
        resolver(user);
      }
      rejected('muerte');
    });
  }
  signIn(email: string, password: string): Promise<any> {
    return new Promise((resolver, rejected) => {
      let encontrado = false;
      this._users.forEach(user => {
        if (user.email === email && user.password === password) {
          encontrado = true;
          this._userActive = user;
        }
      });
      if (encontrado) {
        this.login = true;
        resolver(this._userActive);
      } else {
        rejected('');
      }
    });
  }
  getMyDemandOffer() {
    if (this.userActive.tittle === 'Student') {
      const myDemand = Array<Demand>();
      this._demands.forEach((demand) => {
        if (demand.uid === this.userActive.id) {
          myDemand.push(demand);
        }
      });
      return myDemand;
    } else {
      const myOffer = Array<Offer>();
      this._offers.forEach((offer) => {
        if (offer.uid === this.userActive.id) {
          myOffer.push(offer);
        }
      });
      return myOffer;
    }
  }

  getAllOffers(): Array<Offer> {

    return this._offers;
  }
  getAllDemands(): Array<Demand> {

    return this._demands;
  }
  checkUserStudent() {
    return this.userActive.tittle === 'Student';
  }
  takeUser(uid: string) {
    let userR: User;
    for (const user of this._users) {
      if (user.id === uid) {
        userR = user;
      }
    }
    return userR;
  }
  isLogin(): boolean {
    return this.login;
  }
  createDemand(subject: string, level: string, model: string, mobility: boolean) {
    this._demands.push(this.demandBuilder.restart()
      .level(level)
      .mobility(mobility)
      .model(model)
      .subject(subject)
      .build(this.userActive.id));
  }
  createOffer(subject: string, level: string, model: string, mobility: boolean, timetable: string) {
    this._offers.push(this.offerBuilder.restart()
      .subject(subject)
      .model(model)
      .mobility(mobility)
      .level(level)
      .timetable(timetable)
      .build(this.userActive.id));
  }
  updateUser(nameUser: string, tittleUser = 'Student', addressUser = 'Student') {
    this.userActive.name = nameUser;
    this.userActive.tittle = tittleUser;
    this.userActive.address = addressUser;
  }
  deleteOffer(id: string): void {
    delete this._offers[id];
    console.log('Oferta eliminada');
  }
  deleteDemand(id: string): void {
    delete this._demands[id];
    console.log('demanda eliminada');
  }
  deleteUser(): void {
    delete this.users[this.userActive.id];
    this.userActive = null;
    console.log('Usuario eliminado');
  }

  public get userActive(): User {
    return this._userActive;
  }
  public get users(): Array<User> {
    return this._users;
  }
  public get $userBuilder(): UserBuilder {
    return this.userBuilder;
  }
  public set userActive(value) {
    this.userActive = value;
  }
  signOut(): void {
    this.userActive = null;
    this.login = false;
  }

}
