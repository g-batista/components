import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPizzaComponent } from './review-pizza.component';

describe('ReviewPizzaComponent', () => {
  let component: ReviewPizzaComponent;
  let fixture: ComponentFixture<ReviewPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
