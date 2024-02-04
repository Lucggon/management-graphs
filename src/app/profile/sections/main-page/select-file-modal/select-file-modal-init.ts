import { Component, NgModule } from '@angular/core';



export const selectFileModalRouterName:string = 'selectFileModalRouterName';

@Component({
  template: '<router-outlet name="{{nameRoute}}"></router-outlet>',
})
export class SelectFileModalInit {
      public nameRoute:string = selectFileModalRouterName;
}
