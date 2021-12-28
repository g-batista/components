import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbStepperComponent } from './gb-stepper.component';

describe('GbStepperComponent', () => {
  let component: GbStepperComponent;
  let fixture: ComponentFixture<GbStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GbStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
