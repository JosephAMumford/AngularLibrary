import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { User } from "./user";

import { AuthorizationService } from "../authorization.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-authorization",
  templateUrl: "./authorization.component.html",
  styleUrls: ["./authorization.component.css"]
})
export class AuthorizationComponent implements OnInit {
  constructor(
    private dataService: AuthorizationService,
    private messageService: MessageService
  ) {
    this.Subscription = this.messageService
      .getMessage()
      .subscribe(message => (this.message = message));
  }

  message: any;
  Subscription: Subscription;

  data: User[];

  // Is user logging in (true) else regsitering (false)
  isLogin: boolean;

  // This stores login data
  loginData: User;

  // This stores registration data
  registerData: User;

  ngOnInit() {
    this.loginData = new User();
    this.registerData = new User();
    this.isLogin = true;
    this.getData();
  }

  getData(): void {
    this.data = this.dataService.getData();
    console.log(this.data);
  }

  login() {
    console.log("Attempting to login...");
    let success = this.dataService.login(this.loginData);

    if (success) console.log("Login successful");
    else console.log("Login failed");
  }

  register() {
    console.log("Attempting to register...");
    let success = this.dataService.register(this.registerData);

    if (success) console.log("Registration successful");
    else console.log("Registration failed");
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(
      "Message from Home Component to App Component!"
    );
  }

  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }
}
