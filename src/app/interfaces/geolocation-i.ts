import { GeoPoint } from './../core/model/interfaces/geopoint';
export abstract class IGeolocation {
    abstract ForwardGeocoding(address: string): Promise<GeoPoint|string>;
    abstract getUserLocation(): Promise<string>;
}
