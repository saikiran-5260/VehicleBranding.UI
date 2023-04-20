import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsByIdComponent } from './vehicle-details-by-id.component';

describe('VehicleDetailsByIdComponent', () => {
  let component: VehicleDetailsByIdComponent;
  let fixture: ComponentFixture<VehicleDetailsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
