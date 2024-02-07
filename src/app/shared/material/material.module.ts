import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import { MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatChipsModule,
  MatChipListbox,
  MatChipOption,
  MatChipSet,
  MatChipInput,
  MatChip,
  MatChipGrid,
  MatChipRow,
} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ChipsInputsComponent } from './custom-components/chips-inputs/chips-inputs.component';
import { EventBusService } from './event-bus/event-bus.service';

@NgModule({
  declarations: [ChipsInputsComponent],
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
    MatButtonModule,
    MatTableModule,
    MatChipRow,
    MatChipListbox,
    MatChipGrid,
    MatChipOption,
    MatChipSet,
    MatChip,
    ChipsInputsComponent,
  ],
  providers: [
    EventBusService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class MaterialModule {}
