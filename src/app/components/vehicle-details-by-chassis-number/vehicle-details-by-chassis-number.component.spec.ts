import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsByChassisNumberComponent } from './vehicle-details-by-chassis-number.component';

describe('VehicleDetailsByChassisNumberComponent', () => {
  let component: VehicleDetailsByChassisNumberComponent;
  let fixture: ComponentFixture<VehicleDetailsByChassisNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsByChassisNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsByChassisNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
