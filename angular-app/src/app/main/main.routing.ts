import { MainComponent } from "./main.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
  { path: "", component: MainComponent } // default route of the module
];

export const MainRouting: ModuleWithProviders = RouterModule.forChild(routes);
