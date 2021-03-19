import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-calc',
  templateUrl: './interest-calc.component.html',
  styleUrls: ['./interest-calc.component.css']
})
export class InterestCalcComponent implements OnInit {

  result: any;

  constructor() { }

  ngOnInit(): void {
    this.result = 0;
  }
  
  changeResult (moneyAmmountToBarrow: number, interestRate1: number, interesCompoundPerPeriod: number, forHowLongLoaned: number) {
    this.calculateCompoundInterest(moneyAmmountToBarrow, interestRate1, interesCompoundPerPeriod, forHowLongLoaned);
  }

  public calculateCompoundInterest(moneyAmmountToBarrow: number, interestRate1: number, interesCompoundPerPeriod: number, forHowLongLoaned: number) {
    //console.log(moneyAmmountToBarrow);
    let interestRate = interestRate1 / 100;
    let total;
    let calculation1: number = 1 + interestRate / interesCompoundPerPeriod;
    let calculation2: number = interesCompoundPerPeriod * forHowLongLoaned;
    let calculation3: number = Math.pow(calculation1, calculation2);
    total = moneyAmmountToBarrow * calculation3;
    total = (Math.round(total * 100) / 100).toFixed(2);
    //console.log(total);
    this.result = total;
    //console.log(isNaN(this.result));
  }

}
