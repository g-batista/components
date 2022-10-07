import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jtiku-color-game',
  templateUrl: './jtiku-color-game.component.html',
  styleUrls: ['./jtiku-color-game.component.css']
})


export class JtikuColorGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addName = '';

  quiz = [
    {
      name: 'Add your color'
      , color: 'green'
  }
];

  add = () => {
    this.quiz = [
      ...this.quiz
      , {
        name: this.addName
        , color: this.addName
      }
    ];
    this.addName= '';
  };

}
