import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from '../core/model/user';
import { UserBuilder } from '../core/model/builders/userBuilder';
import { Userable } from '../core/model/interfaces/userable';

@Injectable({
  providedIn: 'root'
})
export class AdapterDataBaseService {
  private userActive: User;
  private users: Observable<Userable[]>;
  private userColection: AngularFirestoreCollection<Userable>;
  private myUsers: User[];
  constructor(private afs: AngularFirestore) {
    this.userColection = this.afs.collection<User>('users');
    this.users = this.userColection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.users.subscribe(
      (res: any) => this.myUsers = res,
      (err: any) => console.log('It is a error unexpected from firebase suscribe')
    );
  }
  getUsers(): Observable<Userable[]> {
    return this.users;
  }
  signUp(email: string, password: string): Promise<any> {
    return new Promise((resolver, rejected) => {
      const user = (new UserBuilder).restart().email(email).password(password).build();
      this.userColection.doc(user.uid).set({
        name: user.name,
        email: user.email,
        adress: user.adress,
        password: user.password,
        tittle: user.tittle
      })
        .then(() => {
          resolver(user);
          this.userActive = user;
        })
        .catch(() => {
          rejected('Error');
        });
    });
  }
  signIn(email: string, password: string): Promise<any> {
    return new Promise((resolver, rejected) => {
      let encontrado = false;
      console.log(this.myUsers);
      this.myUsers.forEach(user => {
        if (user.email === email && user.password === password) {
          encontrado = true;
          this.userActive = user;
        }
      });
      if (encontrado) {
        resolver('');
      } else {
        rejected('');
      }
    });
  }
}
