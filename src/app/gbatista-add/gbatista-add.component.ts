import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gbatista-add',
  templateUrl: './gbatista-add.component.html',
  styleUrls: ['./gbatista-add.component.css']
})
export class GbatistaAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 10;
  numberTwo= 90;
  total= 100;
  mutiplay= 900;
  divide=0;

  add = () => this.total = this.numberOne + this.numberTwo;
  m = () => this.mutiplay = this.numberOne * this.numberTwo;
  d = () => this.divide = this.numberOne / this.numberTwo;


}
