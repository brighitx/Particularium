import { TestBed } from '@angular/core/testing';

import { AdapterGeolocalitationService } from './adapter-geolocalitation.service';

describe('AdapterGeolocalitationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdapterGeolocalitationService = TestBed.get(AdapterGeolocalitationService);
    expect(service).toBeTruthy();
  });
});
