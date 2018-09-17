import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MainComponent } from "./main.component";
import { MainRouting } from "./main.routing";
import { MainService } from "../main.service";

@NgModule({
  imports: [CommonModule, HttpClientModule, MainRouting],
  declarations: [MainComponent],
  exports: [MainComponent],
  providers: [MainService]
})
export class MainModule {}
