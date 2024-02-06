import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

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
        columns: ['']
      })
  }

  get columns(): Array<string> {
    return this.createEmptyForm.get('columns')?.value
  }
}
