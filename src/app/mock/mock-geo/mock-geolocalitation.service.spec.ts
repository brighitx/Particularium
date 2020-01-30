import { TestBed } from '@angular/core/testing';

import { MockGeolocalitationService } from './mock-geolocalitation.service';

describe('MockGeolocalitationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockGeolocalitationService = TestBed.get(MockGeolocalitationService);
    expect(service).toBeTruthy();
  });
});
