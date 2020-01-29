import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'src/app/core/model/user';
import { Observable } from 'rxjs';
import { Userable } from 'src/app/core/model/interfaces/userable';
import { map, take } from 'rxjs/operators';
import { UserBuilder } from 'src/app/core/model/builders/userBuilder';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ManagerUserService {

  private userActive: User;
  private users: Observable<Userable[]>;
  private userColection: AngularFirestoreCollection<Userable>;
  private myUsers: User[];
  private login: boolean;
  constructor(private afs: AngularFirestore, private firebaseAuth: AngularFireAuth) {
    this.login = false;
    this.userColection = this.afs.collection<Userable>('users');
    this.users = this.userColection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
    this.users.subscribe(
      (res: any) => this.myUsers = res,
      (err: any) => console.log('It is a error unexpected from firebase suscribe'));
  }
  public signUp(email: string, password: string): Promise<any> {
    return new Promise((response) => {
      this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          const userBuilder = new UserBuilder();
          const user = userBuilder.restart().email(email).buildWithId(this.firebaseAuth.auth.currentUser.uid);
          this.userColection.doc(user.id).set({
            email: user.email
          })
            .then(() => {
              this.userActive = user;
              response('true');
            });
        })
        .catch();
    });

  }
  public signIn(email: string, password: string): Promise<any> {
    return new Promise((response) => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          this.userActive = this.takeUser(this.getIdUserActive());
          this.login = true;
          response();
        });
    });
  }
  public signOut() {
    this.firebaseAuth.auth.signOut().then(() => {
      this.login = false;
    });
  }
  public isLogin() {
    return this.login;
  }
  public getIdUserActive(): string {
    return this.firebaseAuth.auth.currentUser.uid;
  }
  public checkUserStudent(): boolean {
    return this.userActive.tittle === 'Student';
  }
  public takeUser(uid: string): User {
    let userR: User;
    for (const user of this.myUsers) {
      if (user.id === uid) {
        userR = user;
      }
    }
    return userR;
    /*let response;
    this.getUserFromColeccion(uid).subscribe(
      (res: any) => response = res,
      (err: any) => console.log('It is a error unexpected from firebase suscribe'));
    return response;*/
  }
  private getUserFromColeccion(id: string): Observable<Userable> {
    return this.userColection.doc<Userable>(id).valueChanges().pipe(
      take(1),
      map(user => {
        user.id = id;
        return user;
      })
    );
  }
  public delete() {
    //this.userColection.doc(id).delete();
  }
  public updateUser(nameUser: string, tittleUser: string, addressUser: string) {
    this.userColection.doc(this.userActive.id).update(
      {
        name: nameUser,
        tittle: tittleUser,
        address: addressUser
      }
    );

  }
}
