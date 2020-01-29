import { TestBed } from '@angular/core/testing';

import { ManagerUserService } from './manager-user.service';

describe('ManagerUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerUserService = TestBed.get(ManagerUserService);
    expect(service).toBeTruthy();
  });
});
