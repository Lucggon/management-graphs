import { ControlValueAccessor } from '@angular/forms';
export class EmptyControlValueAccessor implements ControlValueAccessor {
  private onChange: any = () => {};
  private onTouched: any = () => {};
  writeValue(obj: any): void {
  }
   registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


}
