import { Injectable } from "@angular/core";

import { DATA } from "./authorization/data";
import { User } from "./authorization/user";

@Injectable({
  providedIn: "root"
})
export class AuthorizationService {
  data: any[];

  constructor() {}

  getData(): any[] {
    this.data = DATA;
    return this.data;
  }

  login(user: User): boolean {
    let success = false;
    for (let i of this.data) {
      if (i.userName === user.userName) {
        if (i.password === user.password) {
          success = true;
        }
      }
    }
    return success;
  }

  register(user: User): boolean {
    let alreadyRegistered = false;
    let success = false;
    for (let i of this.data) {
      if (i.userName === user.userName) {
        alreadyRegistered = true;
      }
    }

    if (alreadyRegistered == false) {
      this.data.push(user);
      success = true;
    }
    return success;
  }
}
