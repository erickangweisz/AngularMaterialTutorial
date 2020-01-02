import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {
  opened: boolean

  constructor() {
    this.opened = false;
  }

  log(state) {
    console.log(state)
  }
}
