import { TestBed, async, inject } from '@angular/core/testing';

import { IsNotLoginGuard } from './is-not-login.guard';

describe('IsNotLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsNotLoginGuard]
    });
  });

  it('should ...', inject([IsNotLoginGuard], (guard: IsNotLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
