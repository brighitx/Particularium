import { Demand } from './../demand';
export class DemandBuilder {

    // tslint:disable-next-line:variable-name
    private _subject: string;
    // tslint:disable-next-line:variable-name
    private _level: string;
    // tslint:disable-next-line:variable-name
    private _model: string;
    // tslint:disable-next-line:variable-name
    private _mobility: boolean;

    constructor() {

    }

    public restart(): DemandBuilder {
        this._subject = '';
        this._level = '';
        this._model = '';
        this._mobility = false;
        return this;
    }

    public build(userUid: string): Demand {
        return new Demand(userUid, this.generateDID(), this._subject, this._level, this._model, this._mobility);
    }

    subject(subject: string): DemandBuilder {
        this._subject = subject;
        return this;
    }

    level(level: string): DemandBuilder {
        this._level = level;
        return this;
    }

    model(model: string): DemandBuilder {
        this._model = model;
        return this;
    }

    mobility(mobility: boolean): DemandBuilder {
        this._mobility = mobility;
        return this;
    }

    private generateDID(): string {
        let d = new Date().getTime();
        // tslint:disable-next-line:only-arrow-functions
        const did = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            // tslint:disable-next-line:no-bitwise
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            // tslint:disable-next-line:no-bitwise & triple-equal
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return did;
    }
}
