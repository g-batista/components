import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds-addition',
  templateUrl: './ds-addition.component.html',
  styleUrls: ['./ds-addition.component.css']
})
export class DsAdditionComponent implements OnInit {

  isChecked = true;


  ngOnInit(): void {
  }

  thankyou = () => {
    alert("Thank you for letting us know!")
  };
}
