import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spatel-add-days',
  templateUrl: './spatel-add-days.component.html',
  styleUrls: ['./spatel-add-days.component.css']
})
export class SpatelAddDaysComponent implements OnInit {


  constructor() {
 }

  ngOnInit(): void {
      const newDate = new Date();
      console.log(newDate);


  }
  get todaysDate() {
      return (new Date());
  }
  inputDays(){
      const checkP = document.getElementById("newDateP");
      if(checkP){
          checkP.remove();
      }
      const newDate = new Date();
      const input = (<HTMLInputElement>document.getElementById("inputDays")).value;
      console.log(input);
      newDate.setDate(newDate.getDate() + parseInt(input));
      console.log(newDate);


      const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

      const newP = document.createElement("h2");
      newP.setAttribute("id", "newDateP");
      newP.setAttribute("style" , "margin-left:10%");
      newP.innerHTML = ("The New Date is " + newDate.getFullYear() + "-" + months[newDate.getUTCMonth()] + '-' + newDate.getDate());
      document.body.appendChild(newP);



  }

}
