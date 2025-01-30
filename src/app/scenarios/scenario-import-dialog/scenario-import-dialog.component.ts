import {Component, Inject, OnInit} from '@angular/core';
import {AppConfigService} from '../../shared/services/app-config.service';
import {Observable} from 'rxjs';
import {AbstractControl, UntypedFormBuilder, UntypedFormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Papa} from 'ngx-papaparse';
import {ScenariosService} from '../../shared/services/scenarios.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

// Validator to check file type
export function scenarioImportFileTypeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const file = control.value;
    if (file instanceof File) {
      return file.type === 'text/csv' || file.name.toLowerCase().endsWith('.csv')
        ? null
        : { 'fileType': { value: file.type } };
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
  selectedFile: File | null = null;

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
        null,
        [
          Validators.required,
          scenarioImportFileTypeValidator()
        ]
      ]
    });
  }

  getFileName(): string {
    return this.selectedFile ? this.selectedFile.name : '';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedFile = file;
      this.importForm.get('requiredfile').setValue(file);
    }
  }

  // On form submit, parse the file
  onSubmitImportForm() {
    if (this.importForm.invalid) return;  // Exit if form is invalid
    this.parse(this.importForm.value.requiredfile);
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
