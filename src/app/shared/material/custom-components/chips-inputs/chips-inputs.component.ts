import { Component, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER, T } from '@angular/cdk/keycodes';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EmptyControlValueAccessor } from '../../empty-control-value-accesor';

@Component({
  selector: 'app-chips-inputs',
  templateUrl: './chips-inputs.component.html',
  styleUrls: ['./chips-inputs.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsInputsComponent),
      multi: true,
    },
  ],
})
export class ChipsInputsComponent<T extends Array< string >> extends EmptyControlValueAccessor  {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  @Input() className: string = '';
  @Input() labelName: string = '';
  @Input() elements!: T;
  @Input() formControlName!: string;



  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our element
    if (value) {
      this.elements.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(element: string ): void {
    const index = this.elements.indexOf(element);

    if (index >= 0) {
      this.elements.splice(index, 1);
    }
  }



  edit(element:  string , event: MatChipEditedEvent): void {
    const value = (event.value || '').trim();

    // Remove element if it no longer has a name
    if (!value) {
      this.remove(element);
      return;
    }

    // Edit existing element
    const index = this.elements.indexOf(element);
    if (index >= 0) {
      this.elements[index] = value;
    }
  }
}
