import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';  // Update import path for Angular 9
import { AppConfigService } from '../../shared/services/app-config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-advanced-dialog',
  templateUrl: './advanced-dialog.component.html',
  styleUrls: ['./advanced-dialog.component.css']
})
export class AdvancedDialogComponent implements OnInit {
  readOnly$: Observable<boolean>;

  constructor(
    private dialogRef: MatDialogRef<AdvancedDialogComponent>,
    private appConfig: AppConfigService
  ) { }

  ngOnInit() {
    this.readOnly$ = this.appConfig.readOnly$;
  }

  continue() {
    this.appConfig.toggleReadOnly();
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

}
