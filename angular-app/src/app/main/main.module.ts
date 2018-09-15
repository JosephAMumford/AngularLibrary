import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { MainRouting } from "./main.routing";
import { ButtonModule } from "primeng/button";

@NgModule({
  imports: [CommonModule, ButtonModule, MainRouting],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule {}
