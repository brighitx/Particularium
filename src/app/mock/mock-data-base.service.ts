import { DemandBuilder } from './../core/model/builders/demandBuilder';
import { OfferBuilder } from './../core/model/builders/offerBuilder';
import { UserBuilder } from './../core/model/builders/userBuilder';
import { Injectable } from '@angular/core';
import { User } from '../core/model/user';
import { Offer } from '../core/model/offer';
import { Demand } from '../core/model/demand';

@Injectable({
  providedIn: 'root'
})
export class MockDataBaseService {
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
    .subject('math')
    .model('single')
    .mobility(true)
    .level('early')
    .build(this._users[1].uid));

    this._offers.push(this.offerBuilder.restart()
    .subject('History')
    .model('pair')
    .mobility(true)
    .level('Middle')
    .build(this._users[3].uid));

    this._offers.push(this.offerBuilder.restart()
    .subject('Physics')
    .model('Group')
    .mobility(true)
    .level('High')
    .build(this._users[5].uid));

    this._offers.push(this.offerBuilder.restart()
    .subject('Spanish')
    .model('Pairs')
    .mobility(false)
    .level('Common')
    .build(this._users[5].uid));

    this._offers.push(this.offerBuilder.restart()
    .subject('Chemistry')
    .model('Single')
    .mobility(false)
    .level('Beginner')
    .build(this._users[5].uid));

    this._offers.push(this.offerBuilder.restart()
    .subject('English')
    .model('Group')
    .mobility(false)
    .level('Beginer')
    .build(this._users[5].uid));

    this._offers.push(this.offerBuilder.restart()
    .subject('German')
    .model('Single')
    .mobility(true)
    .level('Middle')
    .build(this._users[5].uid));

    this._offers.push(this.offerBuilder.restart()
    .subject('Chinese')
    .model('Pair')
    .mobility(false)
    .level('Low')
    .build(this._users[5].uid));

    this._offers.push(this.offerBuilder.restart()
    .subject('Japanese')
    .model('single')
    .mobility(false)
    .level('Common')
    .build(this._users[5].uid));
  }
  private createDemands() {
    this._demands = new Array<Demand>();
    this._demands.push(this.demandBuilder.restart()
    .level('Advanced')
    .mobility(false)
    .model('Group')
    .subject('Science')
    .build(this._users[2].uid));
    
    this._demands.push(this.demandBuilder.restart()
    .level('Low')
    .mobility(false)
    .model('single')
    .subject('Programming')
    .build(this._users[4].uid));

    this._demands.push(this.demandBuilder.restart()
    .level('Advanced')
    .mobility(false)
    .model('Pair')
    .subject('Economy')
    .build(this._users[6].uid));

    this._demands.push(this.demandBuilder.restart()
    .level('Common')
    .mobility(true)
    .model('Single')
    .subject('English')
    .build(this._users[6].uid));

    this._demands.push(this.demandBuilder.restart()
    .level('Beginner')
    .mobility(true)
    .model('Group')
    .subject('German')
    .build(this._users[6].uid));

    this._demands.push(this.demandBuilder.restart()
    .level('Advanced')
    .mobility(true)
    .model('Single')
    .subject('Literature')
    .build(this._users[6].uid));

    this._demands.push(this.demandBuilder.restart()
    .level('Middle')
    .mobility(false)
    .model('Pair')
    .subject('Boostrap')
    .build(this._users[6].uid));
  }
  private createUsers() {
    this._users = new Array<User>();
    this._users.push(this.userBuilder.restart().email('userOne@ts.es').password('Pa$w0rd').tittle('Teacher').build());
    this._users.push(this.userBuilder.restart().email('userTwo@ts.es').password('Pa$w0rd2').tittle('Student').build());
    this._users.push(this.userBuilder.restart().email('userThree@ts.es').password('Pa$w0rd3').tittle('Teacher').build());
    this._users.push(this.userBuilder.restart().email('userFour@ts.es').password('Pa$w0rd4').tittle('Student').build());
    this._users.push(this.userBuilder.restart().email('userFive@ts.es').password('Pa$w0rd5').tittle('Teacher').build());
    this._users.push(this.userBuilder.restart().email('adri@test.com').password('1234')
      .tittle('Student').name('Adri').address('NULA').build());
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
        resolver(this._userActive);
      } else {
        rejected('');
      }
    });
  }

	public get userActive(): User {
		return this._userActive;
	}
	public get users(): Array<User> {
		return this._users;
	}
	public get $userBuilder(): UserBuilder  {
		return this.userBuilder;
	}
	public set userActive(value: User) {
		this._userActive = value;
	}
	public set users(value: Array<User>) {
		this._users = value;
	}
	public set $userBuilder(value: UserBuilder ) {
		this.userBuilder = value;
	}
   

}
