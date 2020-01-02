import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { ShowAction, HideAction } from 'src/app/store/sidenav/sidenav.actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  opened: boolean

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('sidenav')
      .subscribe(state => this.opened = state);
  }

  toggleSidenav() {
    let action: Action;

    if (!this.opened) action = new ShowAction();
    else action = new HideAction();
    
    this.store.dispatch(action);
  }
}
