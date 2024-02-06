import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import { MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatChipsModule} from '@angular/material/chips';
import { ChipsInputsComponent } from './custom-components/chips-inputs/chips-inputs.component';

@NgModule({
  declarations: [
    ChipsInputsComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ChipsInputsComponent

  ]
})
export class MaterialModule { }
