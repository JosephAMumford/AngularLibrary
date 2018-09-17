import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRouting } from "./app.routing";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouting, BrowserAnimationsModule, MaterialModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
