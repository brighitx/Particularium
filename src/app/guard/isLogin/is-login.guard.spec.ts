import { TestBed, async, inject } from '@angular/core/testing';

import { IsLoginGuard } from './is-login.guard';

describe('IsLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoginGuard]
    });
  });

  it('should ...', inject([IsLoginGuard], (guard: IsLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
