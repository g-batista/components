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

  add = () => this.total = this.numberOne + this.numberTwo;

}
