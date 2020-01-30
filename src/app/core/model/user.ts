export class User {

    // tslint:disable-next-line:variable-name
    private _id: string;
    // tslint:disable-next-line:variable-name
    private _name: string;
    // tslint:disable-next-line:variable-name
    private _password: string;
    // tslint:disable-next-line:variable-name
    private _email: string;
    // tslint:disable-next-line:variable-name
    private _tittle: string;
    // tslint:disable-next-line:variable-name
    private _address: string;

    constructor(id: string, name: string, password: string, email: string, tittle: string, address: string) {
        this._id = id;
        this._name = name;
        this._password = password;
        this._email = email;
        this._tittle = tittle;
        this._address = address;
    }

    public get id(): string {
        return this._id;
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

    public get address(): string {
        return this._address;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set id(value: string) {
        this._id = value;
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
    public set address(value: string) {
        this._address = value;
    }


}
