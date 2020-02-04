import { TestBed } from '@angular/core/testing';

import { MockCameraService } from './mock-camera.service';

describe('MockCameraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockCameraService = TestBed.get(MockCameraService);
    expect(service).toBeTruthy();
  });
});
