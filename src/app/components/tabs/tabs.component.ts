import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent {

  constructor() {}

  logChange(index: number) {
    console.log('index', index);
  }

}
