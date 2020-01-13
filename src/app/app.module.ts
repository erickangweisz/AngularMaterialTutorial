import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { sidenavReducer } from './store/sidenav/sidenav.reducer';

import { AppComponent } from './app.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { IconsComponent } from './components/icons/icons.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { environment } from 'src/environments/environment';
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { GridListComponent } from './components/grid-list/grid-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    NavbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot({ sidenav: sidenavReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
