import { Component, Inject, OnInit } from '@angular/core';
import { AppConfigService } from '../../shared/services/app-config.service';
import { Observable } from 'rxjs';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';  // Corrected import path
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';
import { Papa } from 'ngx-papaparse';
import { ScenariosService } from '../../shared/services/scenarios.service';
import { Router } from '@angular/router';

// Validator to check file type
export function scenarioImportFileTypeValidator(type): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value !== null && typeof control.value.files !== 'undefined' && typeof control.value.files[0] !== 'undefined') {
      return (control.value.files[0].type === type)
        ? null
        : { 'fileType': { value: control.value.files[0].type } };
    }
    return null;
  };
}

@Component({
  selector: 'app-scenario-import-dialog',
  templateUrl: './scenario-import-dialog.component.html',
  styleUrls: ['./scenario-import-dialog.component.css']
})
export class ScenarioImportDialogComponent implements OnInit {
  readOnly$: Observable<boolean>;
  importForm: UntypedFormGroup;

  constructor(
    private dialogRef: MatDialogRef<ScenarioImportDialogComponent>,
    private appConfig: AppConfigService,
    private formBuilder: UntypedFormBuilder,
    private papa: Papa,
    private scenariosService: ScenariosService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.readOnly$ = this.appConfig.readOnly$;

    // Initialize the form group with validation
    this.importForm = this.formBuilder.group({
      requiredfile: [
        undefined,
        [
          Validators.required,
          scenarioImportFileTypeValidator('text/csv')  // Custom file type validator
        ]
      ]
    });
  }

  // On form submit, parse the file
  onSubmitImportForm() {
    if (this.importForm.invalid) return;  // Exit if form is invalid
    this.parse(this.importForm.value.requiredfile.files[0]);
  }

  // Parse the CSV file
  parse(file: File): void {
    const reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = e => {
      const csv = reader.result;

      if (typeof csv === 'string') {
        this.papa.parse(csv, {
          complete: (results, file) => {
            const importResult = this.scenariosService.importCSV(results.data);

            if (importResult && importResult.error) {
              alert(importResult.error);
              this.importForm.reset();
            } else if (importResult && importResult.scenario) {
              this.router.navigate(['/scenario', importResult.scenario.id]);  // Navigate to the imported scenario
              this.close();
            }
          }
        });
      } else {
        console.error("Unexpected file content type. Expected a string.");
      }
    };
  }

  // Close the dialog and reset the form
  close() {
    this.importForm.reset();
    this.dialogRef.close();
  }
}
