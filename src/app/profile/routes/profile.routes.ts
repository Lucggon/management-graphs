import { Route } from "@angular/router";
import { MainPageComponent } from "../sections/main-page/main-page/main-page.component";
import { Component } from "@angular/core";
import { GraphComponent } from "../sections/graph/graph.component";

export const profileRoutes:Route[] = [
  { path: '', component: MainPageComponent},
    {path: 'add', component:GraphComponent},
    {path: 'list', component: MainPageComponent}
  ]
