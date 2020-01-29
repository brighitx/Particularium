import { TestBed } from '@angular/core/testing';

import { ManagerDemandService } from './manager-demand.service';

describe('ManagerDemandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerDemandService = TestBed.get(ManagerDemandService);
    expect(service).toBeTruthy();
  });
});
