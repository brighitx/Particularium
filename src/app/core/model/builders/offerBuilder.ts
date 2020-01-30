import { Offer } from './../offer';
export class OfferBuilder {

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

    constructor() {

    }

    public restart(): OfferBuilder {
        this._subject = '';
        this._level = '';
        this._model = '';
        this._mobility = false;
        this._timetable = '';
        return this;
    }

    public build(userUid: string): Offer {
        return new Offer(userUid, this.generateOID(), this._subject, this._level, this._model, this._mobility, this._timetable);
    }

    subject(subject: string): OfferBuilder {
        this._subject = subject;
        return this;
    }

    level(level: string): OfferBuilder {
        this._level = level;
        return this;
    }

    model(model: string): OfferBuilder {
        this._model = model;
        return this;
    }

    mobility(mobility: boolean): OfferBuilder {
        this._mobility = mobility;
        return this;
    }
    timetable(timetable: string): OfferBuilder {
        this._timetable = timetable;
        return this;
    }

    private generateOID(): string {
        let d = new Date().getTime();
        // tslint:disable-next-line:only-arrow-functions
        const oif = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            // tslint:disable-next-line:no-bitwise
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            // tslint:disable-next-line:no-bitwise & triple-equal
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return oif;
    }
}
