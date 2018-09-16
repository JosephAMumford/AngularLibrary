import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthorizationRouting } from "./authorization.routing";
import { AuthorizationComponent } from "./authorization.component";
import { AuthorizationService } from "../authorization.service";

@NgModule({
  imports: [CommonModule, AuthorizationRouting],
  declarations: [AuthorizationComponent],
  exports: [AuthorizationComponent],
  providers: [AuthorizationService]
})
export class AuthorizationModule {}
