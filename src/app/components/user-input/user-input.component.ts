import { Component } from '@angular/core';
import { InvestmentResultsService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initalInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 5; // Default value of 5%
  duration: number = 10; // Default value of 10 years

  constructor(private investmentResultsService: InvestmentResultsService) { }

  onSubmit() {
    this.investmentResultsService.calculateInvestmentResults({
      initialInvestment: this.initalInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    });
  }

}
