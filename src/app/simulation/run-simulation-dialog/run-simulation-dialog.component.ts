import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-run-simulation-dialog',
  templateUrl: './run-simulation-dialog.component.html',
  styleUrls: ['./run-simulation-dialog.component.css']
})
export class RunSimulationDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<RunSimulationDialogComponent>
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
