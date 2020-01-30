export class Demand {


    // tslint:disable-next-line:variable-name
    private _uid: string;
    // tslint:disable-next-line:variable-name
    private _id: string;
    // tslint:disable-next-line:variable-name
    private _subject: string;
    // tslint:disable-next-line:variable-name
    private _level: string;
    // tslint:disable-next-line:variable-name
    private _model: string;
    // tslint:disable-next-line:variable-name
    private _mobility: boolean;

    constructor(uid: string, id: string, subject: string, level: string, model: string, mobility: boolean) {
        this._uid = uid;
        this._id = id;
        this._subject = subject;
        this._level = level;
        this._model = model;
        this._mobility = mobility;
    }


    public get uid(): string {
        return this._uid;
    }


    public get id(): string {
        return this._id;
    }


    public get subject(): string {
        return this._subject;
    }


    public get level(): string {
        return this._level;
    }


    public get model(): string {
        return this._model;
    }


    public get mobility(): boolean {
        return this._mobility;
    }

    // tslint:disable-next-line: adjacent-overload-signatures
    public set uid(value: string) {
        this._uid = value;
    }

    // tslint:disable-next-line: adjacent-overload-signatures
    public set id(value: string) {
        this._id = value;
    }

    // tslint:disable-next-line: adjacent-overload-signatures
    public set subject(value: string) {
        this._subject = value;
    }


    // tslint:disable-next-line: adjacent-overload-signatures
    public set level(value: string) {
        this._level = value;
    }

    // tslint:disable-next-line: adjacent-overload-signatures
    public set model(value: string) {
        this._model = value;
    }

    // tslint:disable-next-line: adjacent-overload-signatures
    public set mobility(value: boolean) {
        this._mobility = value;
    }

}
