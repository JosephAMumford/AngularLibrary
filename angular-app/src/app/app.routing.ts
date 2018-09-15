import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "content" },
  { path: "content", loadChildren: "./main/main.module#MainModule" }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
