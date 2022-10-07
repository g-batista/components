import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbReviewComponent } from './gb-review.component';

describe('GbReviewComponent', () => {
  let component: GbReviewComponent;
  let fixture: ComponentFixture<GbReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GbReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
