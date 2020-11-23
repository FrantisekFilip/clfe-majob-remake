import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(public dialog: MatDialog) {
  }

  confirmDialog(data: string): Observable<boolean> {
    return new Observable((observer) => {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, { width: '500px', data });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          observer.next(true);
          observer.complete();
        }
        observer.next(false);
        observer.complete();
      });
    });
  }
}
