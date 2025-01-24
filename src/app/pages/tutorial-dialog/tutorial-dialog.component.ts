import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';  // Correct import for Angular 9

@Component({
  selector: 'app-tutorial-dialog',
  templateUrl: './tutorial-dialog.component.html',
  styleUrls: ['./tutorial-dialog.component.css']
})
export class TutorialDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TutorialDialogComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();  // Close the dialog
  }

}
