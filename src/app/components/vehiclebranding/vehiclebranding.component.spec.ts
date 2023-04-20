import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclebrandingComponent } from './vehiclebranding.component';

describe('VehiclebrandingComponent', () => {
  let component: VehiclebrandingComponent;
  let fixture: ComponentFixture<VehiclebrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclebrandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclebrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
