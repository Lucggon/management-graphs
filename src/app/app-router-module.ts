import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './profile/sections/main-page/main-page/main-page.component';
import { profileRoutes } from './profile/routes/profile.routes';
import { ProfileModule } from './profile/profile.module';



@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)}
    ])
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
