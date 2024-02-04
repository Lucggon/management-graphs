import { Route } from "@angular/router";
import { SelectFileModalComponent } from '../select-file-modal.component';
import { UploadCsvComponent } from "../upload-csv/upload-csv.component";
import { CreateEmptyComponent } from "../create-empty/create-empty.component";
import { selectFileModalRouterName } from "../select-file-modal-init";


export const selectFileModalRoutes: Route[] = [
  {path: '', component: SelectFileModalComponent, outlet: selectFileModalRouterName},
  {path: 'upload-csv', component: UploadCsvComponent, outlet : selectFileModalRouterName},
  {path: 'create-empty', component: CreateEmptyComponent, outlet : selectFileModalRouterName},
]
