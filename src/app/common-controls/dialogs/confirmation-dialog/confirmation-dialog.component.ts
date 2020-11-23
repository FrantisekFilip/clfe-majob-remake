import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
  }


  ok(): void {
    this.close(true);
  }

  no(): void {
    this.close(false);
  }

  close(result: boolean): void {
    this.dialogRef.close(result);
  }
}
