import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ButtonModule } from "primeng/button";
import { MainComponent } from "./main.component";
import { MainRouting } from "./main.routing";
import { MainService } from "../main.service";

@NgModule({
  imports: [CommonModule, HttpClientModule, ButtonModule, MainRouting],
  declarations: [MainComponent],
  exports: [MainComponent],
  providers: [MainService]
})
export class MainModule {}
