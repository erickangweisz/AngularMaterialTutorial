import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.sass']
})
export class BadgesComponent implements OnInit {
  notifications: number

  constructor() {
    this.notifications = 2;
  }

  ngOnInit() {
  }

}
