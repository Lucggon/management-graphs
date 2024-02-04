import { Component } from '@angular/core';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Modal } from 'src/app/shared/material/modal-type';
import { modalStyle } from './select-file-modal-style';
import { Router, RouterLink } from '@angular/router';
import { selectFileModalRouterName } from './select-file-modal-init';




@Component({
  selector: 'app-select-file-modal',
  templateUrl: './select-file-modal.component.html',
  styleUrls: ['./select-file-modal.component.css']
})
export class SelectFileModalComponent {
    public static routerDefaultSelectFile = [{outlets: {[selectFileModalRouterName] : ['']}}]
    public nameRoute:string = selectFileModalRouterName;
    public routerUploadCSV = [{outlets: {[this.nameRoute] : ['upload-csv']}}]
    public routerCreateEmpty = [{outlets: {[this.nameRoute] : ['create-empty']}}]

    constructor(public dialogRef: MatDialogRef<SelectFileModalComponent>){
    }
}
