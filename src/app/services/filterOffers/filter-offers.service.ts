import { Injectable } from '@angular/core';
import { Offer } from 'src/app/core/model/offer';
import { IDatabase } from 'src/app/interfaces/database-i';

@Injectable({
  providedIn: 'root'
})
export class FilterOffersService {

  private listDemands: Array<Offer>;

  constructor(private dataBase: IDatabase) { }

  public filtre(seach: string, level: string, mobility: boolean, model: string): Array<Offer> {
    this.listDemands = this.dataBase.getAllOffers();
    return this.filterSeach(seach).filterLevel(level).filterMobility(mobility).filterModel(model).getListDemands();
  }

  private getListDemands(): Array<Offer> {
    return this.listDemands;
  }

  private filterModel(model: string): FilterOffersService {
    if (model === '*') return this;
    let aux: Array<Offer> = new Array<Offer>();
    this.listDemands.forEach(item => {
      if (item.model.localeCompare(model) === 0) { aux.push(item) }
    });
    this.listDemands = aux;
    return this;
  }

  private filterSeach(busqueda: string): FilterOffersService {
    if (busqueda == '*') return this;
    let aux: Array<Offer> = new Array<Offer>();
    this.listDemands.forEach(element => {
      if (element.subject.indexOf(busqueda) == -1) { aux.push(element); }
    });
    this.listDemands = aux;
    return this;
  }

  private filterLevel(level: string): FilterOffersService {
    if (level == '*') return this;
    let aux: Array<Offer> = new Array<Offer>();
    this.listDemands.forEach(item => {
      if (item.subject.localeCompare(level) === 0) { aux.push(item); }
    });
    this.listDemands = aux;
    return this;
  }

  private filterMobility(mobility: boolean): FilterOffersService {
    if (mobility === true) return this;
    let aux: Array<Offer> = new Array<Offer>();
    this.listDemands.forEach(element => {
      if (element.mobility === mobility) { aux.push(element); }
    });
    this.listDemands = aux;
    return this;
  }
}
