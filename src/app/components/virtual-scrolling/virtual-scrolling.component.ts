import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.sass']
})
export class VirtualScrollingComponent implements OnInit {
  numbers = [];

  constructor() { }

  ngOnInit() {
    this.loadNumbers();
  }

  loadNumbers(): void {
    for (let i=0; i<1000; i++) {
      this.numbers.push(i);
    }
  }
}
