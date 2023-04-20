import { TestBed } from '@angular/core/testing';

import { VehicleDetailsByChassisNumberService } from './vehicle-details-by-chassis-number.service';

describe('VehicleDetailsByChassisNumberService', () => {
  let service: VehicleDetailsByChassisNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleDetailsByChassisNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
