import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { DATA } from "./main/data";

@Injectable({
  providedIn: "root"
})
export class MainService {
  constructor(private http: HttpClient) {}

  data = DATA;

  url = "";
  getMain() {
    return this.data;
  }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
