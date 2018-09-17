import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AuthorizationComponent } from "./authorization.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

export const routes: Routes = [
  { path: "", component: AuthorizationComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

export const AuthorizationRouting: ModuleWithProviders = RouterModule.forChild(
  routes
);
