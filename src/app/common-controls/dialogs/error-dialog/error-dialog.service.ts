import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  constructor(public dialog: MatDialog) {
  }

  displayError(error: string): void {
    this.dialog.open(ErrorDialogComponent, { width: '500px', data: error });
  }
}
