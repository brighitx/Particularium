export abstract class ICamera {
    abstract getImage(source: number): Promise<any>;
}
