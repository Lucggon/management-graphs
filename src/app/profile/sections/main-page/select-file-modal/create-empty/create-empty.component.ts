import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectFileModalComponent } from '../select-file-modal.component';
import { MatDialogRef } from '@angular/material/dialog';
import { selectFileModalRouterName } from '../select-file-modal-init';
import {
  EmitEvent,
  EventBusService,
  Events,
} from '../../../../../shared/material/event-bus/event-bus.service';

@Component({
  selector: 'app-create-empty',
  templateUrl: './create-empty.component.html',
  styleUrls: ['./create-empty.component.css'],
})
export class CreateEmptyComponent implements OnInit {
  public createEmptyForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private eventBus: EventBusService,
    public dialogRef: MatDialogRef<SelectFileModalComponent>
  ) {}

  ngOnInit(): void {
    this.createEmptyForm = this.fb.group({
      name: '',
      columns: [[]],
    });
  }

  get columns(): Array<string> {
    return this.createEmptyForm.get('columns')?.value;
  }

  onSubmit() {
    this.eventBus.emit(
      new EmitEvent(Events.DataInfo, this.createEmptyForm.value)
    );
    this.dialogRef.close();
    this.route.navigateByUrl('/profile/main/graph');
  }
}
