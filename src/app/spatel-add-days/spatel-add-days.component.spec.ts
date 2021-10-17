import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpatelAddDaysComponent } from './spatel-add-days.component';

describe('SpatelAddDaysComponent', () => {
  let component: SpatelAddDaysComponent;
  let fixture: ComponentFixture<SpatelAddDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpatelAddDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpatelAddDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
