import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.sass']
})
export class AutocompleteComponent implements OnInit {
  options: string[];
  objectOptions: any[];
  myControl: FormControl;
  filteredOptions: Observable<string[]>;

  constructor() {
    this._initOptions();
    this.myControl = new FormControl();
  }

  ngOnInit(): void {
    this._initFilteredOptions();
  }

  _initOptions(): void {
    this.options = ['angular', 'react', 'vue'];
    this.objectOptions = [
      { name: 'angular' },
      { name: 'angular material' },
      { name: 'react' },
      { name: 'vue' }
    ];
  }

  _initFilteredOptions(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  displayFn(subject) {
    return subject ? subject.name : undefined;
  }
}
