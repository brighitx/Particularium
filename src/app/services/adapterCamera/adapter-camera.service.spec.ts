import { TestBed } from '@angular/core/testing';

import { AdapterCameraService } from './adapter-camera.service';

describe('AdapterCameraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdapterCameraService = TestBed.get(AdapterCameraService);
    expect(service).toBeTruthy();
  });
});
