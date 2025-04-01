import { Injectable } from '@angular/core';
import { InvestmentResultsOutput } from './investment-results-output.model';
import { InvestmentResultsInput } from './investment-results-input.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentResultsService {

  investmentResultsOutput: InvestmentResultsOutput[] = [];

  submitInvestmentResultsInput(investmentResultsInput: InvestmentResultsInput) {
    this.investmentResultsOutput = this.calculateInvestmentResults(investmentResultsInput);
  }

  /**
   * This method calculates the investment results based on the provided input parameters.
   * @param investmentResultsInput - The input parameters for the investment calculation.
   * @returns An array of objects containing the annual investment results.
   */

  private calculateInvestmentResults(investmentResultsInput: InvestmentResultsInput) {
    const annualData = [];
    let investmentValue = investmentResultsInput.initialInvestment;

    for (let i = 0; i < investmentResultsInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investmentResultsInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investmentResultsInput.annualInvestment;
      const totalInterest =
        investmentValue - investmentResultsInput.annualInvestment * year - investmentResultsInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentResultsInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: investmentResultsInput.initialInvestment + investmentResultsInput.annualInvestment * year,
      });
    }

    return annualData;
  }

  getInvestmentResultsOutput() {
    return this.investmentResultsOutput;
  }

  isResultsAvailable() {
    return this.investmentResultsOutput.length > 0;
  }


}
