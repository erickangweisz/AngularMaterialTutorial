import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatButtonToggleModule,
        MatIconModule, 
        MatBadgeModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule, 
        MatDividerModule,
        MatGridListModule, 
        MatExpansionModule, 
        MatCardModule, 
        MatTabsModule, 
        MatStepperModule, 
        MatFormFieldModule,
        MatInputModule, 
        MatSelectModule, 
        MatAutocompleteModule,
        MatCheckboxModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule
];

@NgModule({
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule {}
