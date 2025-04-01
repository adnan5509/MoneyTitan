import { Component } from '@angular/core';
import { InvestmentResultsService } from './investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  constructor(private investmentResultsService: InvestmentResultsService) { }

  get InvestmentResultsOutput() {
    return this.investmentResultsService.getInvestmentResultsOutput();
  }

  get isResultsAvailable() {
    return this.investmentResultsService.isResultsAvailable();
  }

}




