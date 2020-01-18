import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.sass']
})
export class SnackbarComponent {

  constructor(private snackbar: MatSnackBar) {}

  openSnackbar(message: string, action: string): void {
    let snackbarRef = this.snackbar.open(message, action, { duration: 2000 });

    snackbarRef.afterDismissed().subscribe(() => {
      console.log('the snackbar was dismissed');
    });

    snackbarRef.onAction().subscribe(() => {
      console.log('the snackbar action was triggered!');
    });
  }

  openCustomSnackbar() {
    this.snackbar.openFromComponent(
      CustomSnackbarComponent, 
      { duration: 2000 }
    );
  }
}

@Component({
  selector: 'custom-snackbar',
  template: `<span>Custom Snackbar</span>`,
  styles: [ 'span { color : orange }' ]
})
export class CustomSnackbarComponent {}