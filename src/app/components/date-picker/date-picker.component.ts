import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.sass']
})
export class DatePickerComponent {
  minDate: Date;
  maxDate: Date;

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date(2019, 3, 10);
  }
}
