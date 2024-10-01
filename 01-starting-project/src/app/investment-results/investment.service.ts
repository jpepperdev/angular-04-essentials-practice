import { Injectable } from "@angular/core";
import { type Investment } from "./investment.model";

@Injectable({providedIn: 'root'})
export class InvestmentService {
    private annualData: Investment[] = [];

    calculate(inv: {initialInvestment: number, duration: number, expectedReturn: number, annualInvestment: number}){
        let investmentValue = inv.initialInvestment;
    
        for (let i = 0; i < inv.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (inv.expectedReturn / 100);
          investmentValue += interestEarnedInYear + inv.annualInvestment;
          const totalInterest =
            investmentValue - inv.annualInvestment * year - inv.initialInvestment;
          this.annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: inv.annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: inv.initialInvestment + inv.annualInvestment * year
          });
        }
      }

      get calculatedAnnualData() {
        return this.annualData;
      }

      resetTotals() {
        this.annualData = [];
      }
}