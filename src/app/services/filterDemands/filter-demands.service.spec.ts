import { TestBed } from '@angular/core/testing';

import { FilterDemandsService } from './filter-demands.service';

describe('FilterDemandsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterDemandsService = TestBed.get(FilterDemandsService);
    expect(service).toBeTruthy();
  });
});
