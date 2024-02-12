import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  filter,
  map,
} from 'rxjs';

@Injectable()
export class EventBusService {
  private subject = new BehaviorSubject<any>('');

  on<T>(event: Events): Observable<T> {
    return this.subject.pipe(
      filter((e: EmitEvent) => {
        return e.name === event;
      }),
      map((event: EmitEvent) => {
        return event.value;
      })
    );
  }

  emit(event: EmitEvent) {
    this.subject.next(event);
  }
}
export class EmitEvent {
  constructor(public name: any, public value?: any) {}
}

export enum Events {
  DataInfo,
}
