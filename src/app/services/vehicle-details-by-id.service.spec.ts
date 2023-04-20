import { TestBed } from '@angular/core/testing';

import { VehicleDetailsByIdService } from './vehicle-details-by-id.service';

describe('VehicleDetailsByIdService', () => {
  let service: VehicleDetailsByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleDetailsByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
