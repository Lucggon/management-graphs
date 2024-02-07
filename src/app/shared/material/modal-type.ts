import { ComponentType } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

export type Modal<T> = {
  component:ComponentType<T>,
  config?:MatDialogConfig<T>
}
