import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-empty',
  templateUrl: './create-empty.component.html',
  styleUrls: ['./create-empty.component.css']
})
export class CreateEmptyComponent implements OnInit {
  public createEmptyForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      this.createEmptyForm = this.fb.group({
        name: '',
        columns: this.fb.array([this.buildColumnName])
      })
  }

  get columns(): FormArray {
    return this.createEmptyForm.get('columns') as FormArray;
  }

  buildColumnName(): FormGroup {
      return this.fb.group({
        column: ''
      })
  }
}
