import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-pizza',
  templateUrl: './review-pizza.component.html',
  styleUrls: ['./review-pizza.component.css']
})
export class ReviewPizzaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'before';
  disabled = false;

}
