import { User } from './../user';
export class UserBuilder {
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
    private _address: string;
    constructor() {
        // uid: string, name: string, password: string, email: string, tittle: string, adress: string
    }
    public restart(): UserBuilder {
        this._name = '';
        this._password = '';
        this._email = '';
        this._tittle = '';
        this._address = '';
        return this;
    }
    public build(): User {
        return new User(this.generateUID(), this._name, this._password, this._email, this._tittle, this._address);
    }
    public buildWithId( id: string ): User {
        return new User(id, this._name, this._password, this._email, this._tittle, this._address);
    }
    name(name: string): UserBuilder {
        this._name = name;
        return this;
    }
    password(password: string): UserBuilder {
        this._password = password;
        return this;
    }
    email(email: string): UserBuilder {
        this._email = email;
        return this;
    }
    tittle(tittle: string): UserBuilder {
        this._tittle = tittle;
        return this;
    }
    address(address: string): UserBuilder {
        this._address = address;
        return this;
    }
    private generateUID(): string {
        let d = new Date().getTime();
        // tslint:disable-next-line:only-arrow-functions
        const uid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            // tslint:disable-next-line:no-bitwise
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            // tslint:disable-next-line:no-bitwise & triple-equal
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uid;
    }


}
