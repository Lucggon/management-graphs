import { Component, Input } from '@angular/core';
import { EmptyData } from '../../main-page/select-file-modal/create-empty/create-empty';

@Component({
  selector: 'app-graph-editor',
  templateUrl: './graph-editor.component.html',
  styleUrls: ['./graph-editor.component.css'],
})
export class GraphEditorComponent {
  @Input() columns!: string[];

  constructor() {}

  removeColumn(column: string) {
    const index = this.columns.indexOf(column);

    if (index >= 0) {
      this.columns.splice(index, 1);
    }
  }

  addColumn(event: any) {
    console.log(event);
  }
}
