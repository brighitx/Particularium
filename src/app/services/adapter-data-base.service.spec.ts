import { TestBed } from '@angular/core/testing';

import { AdapterDataBaseService } from './adapter-data-base.service';

describe('AdapterDataBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdapterDataBaseService = TestBed.get(AdapterDataBaseService);
    expect(service).toBeTruthy();
  });
});
