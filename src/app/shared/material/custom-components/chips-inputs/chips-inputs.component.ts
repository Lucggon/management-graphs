import { Component, Input, forwardRef } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER, T } from '@angular/cdk/keycodes';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class ChipsInputsComponent<T extends Array< string >> implements ControlValueAccessor  {


  onChange: any = () => {};
  onTouched: any = () => {};

  @Input() className: string = '';
  @Input() labelName: string = '';
  @Input() elements!: T;
  @Input() formControlName!: string;

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  writeValue(event: MatChipInputEvent): void {
    if(event) {
    const value = (event.value || '').trim();

    // Add our element
    if (value) {
      this.elements.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
  }

  remove(element: string ): void {
    const index = this.elements.indexOf(element);

    if (index >= 0) {
      this.elements.splice(index, 1);
    }
  }

   registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
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
