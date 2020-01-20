export class Offer {

    // PROFESOR
    // tslint:disable-next-line:variable-name
    private _uid: string;
    // tslint:disable-next-line:variable-name
    private _oid: string;
    // tslint:disable-next-line:variable-name
    private _subject: string;
    // tslint:disable-next-line:variable-name
    private _level: string;
    // tslint:disable-next-line:variable-name
    private _model: string;
    // tslint:disable-next-line:variable-name
    private _mobility: boolean;
    // tslint:disable-next-line:variable-name
    private _timetable: string;

    constructor(uid: string, oif: string, subject: string, level: string, model: string, mobility: boolean, timetable: string) {
        this._uid = uid;
        this._oid = oif;
        this._subject = subject;
        this._level = level;
        this._model = model;
        this._mobility = mobility;
        this._timetable = timetable;
    }


    public get uid(): string {
        return this._uid;
    }

    public get oid(): string {
        return this._oid;
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


    public get timetable(): string {
        return this._timetable;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    public set uid(value: string) {
        this._uid = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set oid(value: string) {
        this._oid = value;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    public set subject(value: string) {
        this._subject = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set level(value: string) {
        this._level = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set model(value: string) {
        this._model = value;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    public set mobility(value: boolean) {
        this._mobility = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set timetable(value: string) {
        this._timetable = value;
    }

}
