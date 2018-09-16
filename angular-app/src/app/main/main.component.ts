import { Component, OnInit } from "@angular/core";

import { MainService } from "../main.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(private dataService: MainService) {}

  data: any;

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    //this.dataService.getData().subscribe(src => (this.data = src));
    this.data = this.dataService.getMain();
    console.log(this.data);
  }
}
