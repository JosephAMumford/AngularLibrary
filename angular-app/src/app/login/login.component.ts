import { Component, OnInit } from "@angular/core";

import { User } from "../authorization/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData: User;

  constructor() {}

  ngOnInit() {
    this.userData = new User();
  }

  login() {
    console.log(this.userData);
  }
}
