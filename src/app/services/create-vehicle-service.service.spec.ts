import { TestBed } from '@angular/core/testing';

import { CreateVehicleServiceService } from './create-vehicle-service.service';

describe('CreateVehicleServiceService', () => {
  let service: CreateVehicleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateVehicleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
