import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './sections/main-page/main-page/main-page.component';
import { MaterialModule } from '../shared/material/material.module';
import { GraphComponent } from './sections/graph/graph.component';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './routes/profile.routes';
import { SelectFileModalComponent } from './sections/main-page/select-file-modal/select-file-modal.component';
import { selectFileModalRoutes } from './sections/main-page/select-file-modal/routes/select-file-modal.routes';
import { UploadCsvComponent } from './sections/main-page/select-file-modal/upload-csv/upload-csv.component';
import { CreateEmptyComponent } from './sections/main-page/select-file-modal/create-empty/create-empty.component';
import { SelectFileModalInit } from './sections/main-page/select-file-modal/select-file-modal-init';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphEditorComponent } from './sections/graph/graph-editor/graph-editor.component';



@NgModule({
  declarations: [
    MainPageComponent,
    GraphComponent,
    SelectFileModalInit,
    SelectFileModalComponent,
    UploadCsvComponent,
    CreateEmptyComponent,
    GraphEditorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(profileRoutes),
    RouterModule.forChild(selectFileModalRoutes)
  ],
  exports:[
    MainPageComponent
  ]
})
export class ProfileModule { }
