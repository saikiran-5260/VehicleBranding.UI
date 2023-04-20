import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewVehivleComponent } from './create-new-vehivle.component';

describe('CreateNewVehivleComponent', () => {
  let component: CreateNewVehivleComponent;
  let fixture: ComponentFixture<CreateNewVehivleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewVehivleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewVehivleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
