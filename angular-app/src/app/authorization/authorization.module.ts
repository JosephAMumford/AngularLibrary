import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AuthorizationRouting } from "./authorization.routing";
import { AuthorizationComponent } from "./authorization.component";
import { AuthorizationService } from "../authorization.service";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

@NgModule({
  imports: [CommonModule, FormsModule, AuthorizationRouting],
  declarations: [AuthorizationComponent, LoginComponent, RegisterComponent],
  exports: [AuthorizationComponent],
  providers: [AuthorizationService]
})
export class AuthorizationModule {}
