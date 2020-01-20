export class User {

    // tslint:disable-next-line:variable-name
    private _uid: string;
    // tslint:disable-next-line:variable-name
    private _name: string;
    // tslint:disable-next-line:variable-name
    private _password: string;
    // tslint:disable-next-line:variable-name
    private _email: string;
    // tslint:disable-next-line:variable-name
    private _tittle: string;
    // tslint:disable-next-line:variable-name
    private _adress: string;

    constructor(uid: string, name: string, password: string, email: string, tittle: string, adress: string) {
        this._uid = uid;
        this._name = name;
        this._password = password;
        this._email = email;
        this._tittle = tittle;
        this._adress = adress;
    }

    public get uid(): string {
        return this._uid;
    }
    public get name(): string {
        return this._name;
    }
    public get password(): string {
        return this._password;
    }

    public get email(): string {
        return this._email;
    }

    public get tittle(): string {
        return this._tittle;
    }

    public get adress(): string {
        return this._adress;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set uid(value: string) {
        this._uid = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set name(value: string) {
        this._name = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set password(value: string) {
        this._password = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set email(value: string) {
        this._email = value;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    public set tittle(value: string) {
        this._tittle = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set adress(value: string) {
        this._adress = value;
    }


}
