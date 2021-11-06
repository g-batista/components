import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsAdditionComponent } from './ds-addition.component';

describe('DsAdditionComponent', () => {
  let component: DsAdditionComponent;
  let fixture: ComponentFixture<DsAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
