import { Route } from "@angular/router";
import { MainPageComponent } from "../sections/main-page/main-page/main-page.component";
import { Component } from "@angular/core";
import { GraphComponent } from "../sections/graph/graph.component";

export const profileRoutes: Route[] = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    children: [
      { path: '', component: MainPageComponent },
      { path: 'graph', component: GraphComponent },
      { path: 'list', component: MainPageComponent },
    ],
  },
];
