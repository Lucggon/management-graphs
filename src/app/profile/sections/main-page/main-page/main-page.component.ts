import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectFileModalComponent } from '../select-file-modal/select-file-modal.component';
import { modalStyle } from '../select-file-modal/select-file-modal-style';
import { SelectFileModalInit } from '../select-file-modal/select-file-modal-init';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(public dialog: MatDialog){
  }

  openSelectFileModal() {
      this.dialog.open(SelectFileModalInit,
        {
          ...modalStyle
        })
  }
}
