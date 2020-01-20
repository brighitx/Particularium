export class Demand {

    // ALUMNOOOOOOO
    private _uid: string;
    private _did: string;
    private _subject: string;
    private _level: string;
    private _model: string;
    private _mobility: boolean;

    constructor (uid: string, did: string, subject: string, level: string, model: string, mobility: boolean) {
        this._uid = uid;
        this._did = did;
        this._subject = subject;
        this._level = level;
        this._model = model;
        this._mobility = mobility;
    }

    /**
     * Getter uid
     * @return {string}
     */
	public get uid(): string {
		return this._uid;
	}

    /**
     * Getter oif
     * @return {string}
     */
	public get did(): string {
		return this._did;
	}

    /**
     * Getter subject
     * @return {string}
     */
	public get subject(): string {
		return this._subject;
	}

    /**
     * Getter level
     * @return {string}
     */
	public get level(): string {
		return this._level;
	}

    /**
     * Getter model
     * @return {string}
     */
	public get model(): string {
		return this._model;
	}

    /**
     * Getter mobility
     * @return {boolean}
     */
	public get mobility(): boolean {
		return this._mobility;
	}

    /**
     * Setter uid
     * @param {string} value
     */
	public set uid(value: string) {
		this._uid = value;
	}

    /**
     * Setter oif
     * @param {string} value
     */
	public set did(value: string) {
		this._did = value;
	}

    /**
     * Setter subject
     * @param {string} value
     */
	public set subject(value: string) {
		this._subject = value;
	}

    /**
     * Setter level
     * @param {string} value
     */
	public set level(value: string) {
		this._level = value;
	}

    /**
     * Setter model
     * @param {string} value
     */
	public set model(value: string) {
		this._model = value;
	}

    /**
     * Setter mobility
     * @param {boolean} value
     */
	public set mobility(value: boolean) {
		this._mobility = value;
	}

}