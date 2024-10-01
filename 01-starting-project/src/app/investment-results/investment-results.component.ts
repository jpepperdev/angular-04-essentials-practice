import { Component, inject } from '@angular/core';
import { Investment } from './investment.model';
import { InvestmentService } from './investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  annualData!: Investment[];

  investmentService = inject(InvestmentService);

  constructor(){
    this.annualData = this.investmentService.calculatedAnnualData;
  }

}
