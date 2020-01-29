import { Offer } from '../core/model/offer';
import { Demand } from '../core/model/demand';
import { User } from '../core/model/user';

export abstract class IDatabase {
    abstract checkUserStudent(): boolean ;
    abstract signUp(email: string, password: string): Promise<any>;
    abstract signIn(email: string, password: string): Promise<any>;
    abstract createDemand(subject: string, level: string, model: string, mobility: boolean);
    abstract createOffer(subject: string, level: string, model: string, mobility: boolean, timetable: string);
    abstract getAllOffers(): Array<Offer>;
    abstract getAllDemands(): Array<Demand>;
    abstract getMyDemandOffer(): Array<Demand | Offer>;
    abstract takeUser(uid: string): User;
    abstract updateUser(nameUser: string, tittleUser?: string, addressUser?: string);
    abstract isLogin(): boolean;
    abstract signOut(): void;
    abstract deleteOffer(id: string): void;
    abstract deleteDemand(id: string): void;
    abstract deleteUser(): void;
}
