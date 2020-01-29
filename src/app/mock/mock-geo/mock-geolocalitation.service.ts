import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockGeolocalitationService {

  constructor() { }
  async getUserLocation() {
    return new Promise<string>((response) => {
      response('Street mock teacher');
    });
  }
}
