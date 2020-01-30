import { TestBed } from '@angular/core/testing';

import { FilterOffersService } from './filter-offers.service';

describe('FilterOffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterOffersService = TestBed.get(FilterOffersService);
    expect(service).toBeTruthy();
  });
});
