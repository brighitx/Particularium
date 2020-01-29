import { TestBed } from '@angular/core/testing';

import { ManagerOfferService } from './manager-offer.service';

describe('ManagerOfferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerOfferService = TestBed.get(ManagerOfferService);
    expect(service).toBeTruthy();
  });
});
