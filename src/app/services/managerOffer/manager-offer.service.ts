import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Offerable } from 'src/app/core/model/interfaces/offerable';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/core/model/offer';
import { map } from 'rxjs/operators';
import { OfferBuilder } from 'src/app/core/model/builders/offerBuilder';

@Injectable({
  providedIn: 'root'
})
export class ManagerOfferService {
  private offers: Observable<Offerable[]>;
  private offersColection: AngularFirestoreCollection<Offerable>;
  private myOffers: Offer[];
  constructor(private afs: AngularFirestore) {

    this.offersColection = this.afs.collection<Offerable>('offers');
    this.offers = this.offersColection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
    this.offers.subscribe(
      (res: any) => this.myOffers = res,
      (err: any) => console.log('It is a error unexpected from firebase suscribe'));
  }
  public getAllOffer(): Array<Offer> {
    const allOffer = Array<Offer>();
    for (const offer of this.myOffers) {
      allOffer.push(offer);
    }
    return allOffer;
  }
  public getMyOffer(uid: string): Array<Offer> {
    const myOffer = Array<Offer>();
    this.getAllOffer().forEach((offer) => {
      if (offer.uid === uid) {
        myOffer.push(offer);
      }
    });
    return myOffer;
  }
  public createOffer(subject: string, level: string, model: string, mobility: boolean, timetable: string, uid: string) {
    return new Promise((resolver, rejected) => {
      const offerBuilder = new OfferBuilder();
      const offer = offerBuilder.restart()
        .subject(subject)
        .level(level)
        .model(model)
        .mobility(mobility)
        .timetable(timetable)
        .build(uid);

      this.offersColection.doc(offer.id).set({
        uid: offer.uid,
        subject: offer.subject,
        level: offer.level,
        model: offer.model,
        mobility: offer.mobility,
        timetable: offer.timetable,
      })
        .then(() => {
          resolver(offer);
        })
        .catch(() => {
          rejected('Error');
        });
    });
  }
  public delete(id: string) {
    this.offersColection.doc(id).delete();
  }
}
