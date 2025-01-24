import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';  // Correct import for Angular 9

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.css']
})
export class ShareDialogComponent implements OnInit {
  message: string;

  constructor(
    private dialogRef: MatDialogRef<ShareDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any  // Specify type for data (optional)
  ) {}

  ngOnInit() {
    this.message = this.data.message;  // Initialize message from passed data
  }

  close() {
    this.dialogRef.close('Successful close message here.');  // Close dialog with a message
  }
}
