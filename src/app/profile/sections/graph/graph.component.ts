import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  EventBusService,
  Events,
} from 'src/app/shared/material/event-bus/event-bus.service';
import { EmptyData } from '../main-page/select-file-modal/create-empty/create-empty';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent {
  private emptyData!: EmptyData;
  constructor(private eventBus: EventBusService) {
    this.eventBus.on(
      Events.DataInfo,
      (value: EmptyData) => (this.emptyData = value)
    );
  }

  get columns(): string[] {
    return this.emptyData?.columns || ['Nombre', 'Precio'];
  }

  get name(): string {
    return this.emptyData?.name || 'Nombre_test';
  }

  get data(): [] {
    return [];
  }
}
