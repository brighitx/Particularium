import { Observable } from 'rxjs';
import { DemandBuilder } from './../core/model/builders/demandBuilder';
import { OfferBuilder } from './../core/model/builders/offerBuilder';
import { UserBuilder } from './../core/model/builders/userBuilder';
import { Injectable } from '@angular/core';
import { User } from '../core/model/user';
import { Offer } from '../core/model/offer';
import { Demand } from '../core/model/demand';
import { IDatabase } from '../interfaces/database-i';

@Injectable({
  providedIn: 'root'
})
export class MockDataBaseService implements IDatabase {
  deleteOffer(id: string): void {
    throw new Error("Method not implemented.");
  }
  deleteDemand(id: string): void {
    throw new Error("Method not implemented.");
  }
  deleteUser(): void {
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
    this._offers.push(this.offerBuilder.restart()
      .subject('Math')
      .model('Single')
      .mobility(true)
      .level('Early')
      .build(this._users[1].id));

    this._offers.push(this.offerBuilder.restart()
      .subject('History')
      .model('Pair')
      .mobility(true)
      .level('Middle')
      .build(this._users[3].id));

    this._offers.push(this.offerBuilder.restart()
      .subject('Physics')
      .model('Group')
      .mobility(true)
      .level('High')
      .build(this._users[5].id));

    this._offers.push(this.offerBuilder.restart()
      .subject('Spanish')
      .model('Pairs')
      .mobility(false)
      .level('Common')
      .build(this._users[5].id));

    this._offers.push(this.offerBuilder.restart()
      .subject('Chemistry')
      .model('Single')
      .mobility(false)
      .level('Beginner')
      .build(this._users[5].id));

    this._offers.push(this.offerBuilder.restart()
      .subject('English')
      .model('Group')
      .mobility(false)
      .level('Beginer')
      .build(this._users[5].id));

    this._offers.push(this.offerBuilder.restart()
      .subject('German')
      .model('Single')
      .mobility(true)
      .level('Middle')
      .build(this._users[5].id));

    this._offers.push(this.offerBuilder.restart()
      .subject('Chinese')
      .model('Pair')
      .mobility(false)
      .level('Low')
      .build(this._users[5].id));

    this._offers.push(this.offerBuilder.restart()
      .subject('Japanese')
      .model('single')
      .mobility(false)
      .level('Common')
      .build(this._users[5].id));
  }
  private createDemands() {
    this._demands = new Array<Demand>();
    this._demands.push(this.demandBuilder.restart()
      .level('Advanced')
      .mobility(false)
      .model('Group')
      .subject('Science')
      .build(this._users[2].id));

    this._demands.push(this.demandBuilder.restart()
      .level('Low')
      .mobility(false)
      .model('single')
      .subject('Programming')
      .build(this._users[4].id));

    this._demands.push(this.demandBuilder.restart()
      .level('Advanced')
      .mobility(false)
      .model('Pair')
      .subject('Economy')
      .build(this._users[4].id));

    this._demands.push(this.demandBuilder.restart()
      .level('Common')
      .mobility(true)
      .model('Single')
      .subject('English')
      .build(this._users[4].id));

    this._demands.push(this.demandBuilder.restart()
      .level('Beginner')
      .mobility(true)
      .model('Group')
      .subject('German')
      .build(this._users[4].id));

    this._demands.push(this.demandBuilder.restart()
      .level('Advanced')
      .mobility(true)
      .model('Single')
      .subject('Literature')
      .build(this._users[4].id));

    this._demands.push(this.demandBuilder.restart()
      .level('Middle')
      .mobility(false)
      .model('Pair')
      .subject('Boostrap')
      .build(this._users[4].id));
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
