import { Injectable } from '@angular/core';
import { Demandable } from 'src/app/core/model/interfaces/demandable';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Demand } from 'src/app/core/model/demand';
import { map } from 'rxjs/operators';
import { DemandBuilder } from 'src/app/core/model/builders/demandBuilder';


@Injectable({
  providedIn: 'root'
})
export class ManagerDemandService {

  private demands: Observable<Demandable[]>;
  private demandsColection: AngularFirestoreCollection<Demandable>;
  private myDemands: Demand[];

  constructor(private afs: AngularFirestore) {
    this.demandsColection = this.afs.collection<Demandable>('demands');
    this.demands = this.demandsColection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
    this.demands.subscribe(
      (res: any) => this.myDemands = res,
      (err: any) => console.log('It is a error unexpected from firebase suscribe'));
  }

  getAllDemands(): Array<Demand> {
    const allDemand = Array<Demand>();
    for (const demand of this.myDemands) {
      allDemand.push(demand);
    }
    return allDemand;
  }

  getMyDemand(uid: string): Array<Demand> {
    const myDemand = Array<Demand>();
    this.getAllDemands().forEach((demand) => {
      if (demand.uid === uid) {
        myDemand.push(demand);
      }
    });
    return myDemand;

  }
  createDemand(subject: string, level: string, model: string, mobility: boolean, uid: string): Promise<string> {
    return new Promise((resolver, rejected) => {
      const demandBuilder = new DemandBuilder();
      const demand = demandBuilder.restart()
        .subject(subject)
        .level(level)
        .model(model)
        .mobility(mobility)
        .build(uid);

      this.demandsColection.doc(demand.id).set({
        uid: demand.uid,
        subject: demand.subject,
        level: demand.level,
        model: demand.model,
        mobility: demand.mobility
      })
        .then(() => {
          console.log("Demanda creada con los valores");
          console.log(demand);
          resolver('Okay');
        })
        .catch(() => {
          rejected('Error');
        });
    });
  }
  public delete(id: string) {
    this.demandsColection.doc(id).delete();
  }

  public updateDemand(idDemand: string, newSubject: string, newLevel: string, newModel: string, newMobility: boolean) {
    this.demandsColection.doc(idDemand).update(
      {
        level: newLevel,
        mobility: newMobility,
        model: newModel,
        subject: newSubject
      }
    );
  }

}
