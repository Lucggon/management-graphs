import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  EventBusService,
  Events,
} from 'src/app/shared/material/event-bus/event-bus.service';
import { EmptyData } from '../main-page/select-file-modal/create-empty/create-empty';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  data!: Observable<EmptyData>;
  constructor(private eventBus: EventBusService) {}
  ngOnInit(): void {
    this.data = this.eventBus.on<EmptyData>(Events.DataInfo);
  }

  get dataSource() {
    return [];
  }
}
