import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './sections/main-page/main-page/main-page.component';
import { MaterialModule } from '../shared/material/material.module';
import { GraphComponent } from './sections/graph/graph.component';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './routes/profile.routes';



@NgModule({
  declarations: [
    MainPageComponent,
    GraphComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    RouterModule.forChild(profileRoutes)
  ],
  exports:[
    MainPageComponent
  ]
})
export class ProfileModule { }
