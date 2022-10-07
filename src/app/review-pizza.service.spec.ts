import { TestBed } from '@angular/core/testing';

import { ReviewPizzaService } from './review-pizza.service';

describe('ReviewPizzaService', () => {
  let service: ReviewPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
