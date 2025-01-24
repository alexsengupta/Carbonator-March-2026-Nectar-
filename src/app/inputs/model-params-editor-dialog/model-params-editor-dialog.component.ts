import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-model-params-editor-dialog',
  templateUrl: './model-params-editor-dialog.component.html',
  styleUrls: ['./model-params-editor-dialog.component.css']
})
export class ModelParamsEditorDialogComponent implements OnInit {
  constants;
  constantsForm: UntypedFormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModelParamsEditorDialogComponent>,
    private formBuilder: UntypedFormBuilder,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.constants = this.data.constants;
    this.createForm();
  }

  close() {
    this.dialogRef.close(false);
  }

  save() {
    const fields = this.constantsForm.controls;
    const newConstants = JSON.parse(JSON.stringify(this.constants));

    for (let field in fields) {
      newConstants[field].value = +fields[field].value;
    }

    this.dialogRef.close({ constants: newConstants });
  }

  reset() {
    this.dialogRef.close({ reset: true });
  }

  get constantsArr() {
    const constants = Object.keys(this.constants);
    let constantsArr = [];
    for (let key of constants) {
      constantsArr.push(this.constants[key]);
    }
    return constantsArr;
  }

  createForm() {
    const fields = {};
    for (let constant of this.constantsArr) {
      fields[constant.label] = [constant.value, [Validators.required]];
    }
    this.constantsForm = this.formBuilder.group(fields);
  }
}
