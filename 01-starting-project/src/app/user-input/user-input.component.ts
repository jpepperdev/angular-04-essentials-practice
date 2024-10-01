import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  investment = {
    initialInvestment: 0.00,
    annualInvestment: 0.00,
    expectedReturn: 0,
    duration: 0
  };

  constructor(private investmentService: InvestmentService){

  }

  calculate(){
    this.investmentService.calculate(this.investment);
  }
}
