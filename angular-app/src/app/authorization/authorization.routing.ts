import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AuthorizationComponent } from "./authorization.component";

export const routes: Routes = [{ path: "", component: AuthorizationComponent }];

export const AuthorizationRouting: ModuleWithProviders = RouterModule.forChild(
  routes
);
