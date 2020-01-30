import { Injectable } from '@angular/core';
import { Demand } from 'src/app/core/model/demand';
import { IDatabase } from 'src/app/interfaces/database-i';

@Injectable({
  providedIn: 'root'
})
export class FilterDemandsService {

  private listDemands: Array<Demand>;

  constructor(private dataBase: IDatabase) { }

  public filtre(seach: string, level: string, mobility: boolean, model: string): Array<Demand> {
    this.listDemands = this.dataBase.getAllDemands();
    return this.filterSeach(seach).filterLevel(level).filterMobility(mobility).filterModel(model).getListDemands();
  }

  private getListDemands(): Array<Demand> {
    return this.listDemands;
  }

  private filterModel(model: string): FilterDemandsService {
    if (model === '*') return this;
    let aux: Array<Demand> = new Array<Demand>();
    this.listDemands.forEach(item => {
      if (item.model.localeCompare(model) === 0) { aux.push(item) }
    });
    this.listDemands = aux;
    return this;
  }

  private filterSeach(busqueda: string): FilterDemandsService {
    if (busqueda == '*') return this;
    let aux: Array<Demand> = new Array<Demand>();
    this.listDemands.forEach(element => {
      if (element.subject.indexOf(busqueda) == -1) { aux.push(element); }
    });
    this.listDemands = aux;
    return this;
  }

  private filterLevel(level: string): FilterDemandsService {
    if (level == '*') return this;
    let aux: Array<Demand> = new Array<Demand>();
    this.listDemands.forEach(item => {
      if (item.subject.localeCompare(level) === 0) { aux.push(item); }
    });
    this.listDemands = aux;
    return this;
  }

  private filterMobility(mobility: boolean): FilterDemandsService {
    if (mobility === true) return this;
    let aux: Array<Demand> = new Array<Demand>();
    this.listDemands.forEach(element => {
      if (element.mobility === mobility) { aux.push(element); }
    });
    this.listDemands = aux;
    return this;
  }
}
