import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(
      DialogExampleComponent,
      { data: { name: 'erickangweisz' } }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`dialog result: ${result}`);
    });
  }
}
