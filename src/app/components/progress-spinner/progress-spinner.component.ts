import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.sass']
})
export class ProgressSpinnerComponent {
  showSpinner: boolean;

  constructor() {
    this.showSpinner = false;
  }

  loadData(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
}
