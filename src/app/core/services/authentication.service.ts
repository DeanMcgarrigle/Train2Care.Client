import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/shareReplay";

@Injectable()
export class AuthenticationService {
  private server = environment.apiUrl;
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    const headers = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Basic " + window.btoa(decodeURI(encodeURI(username + ":" + password)))
      )
    };
    console.log(username, password);
    return this.http
      .post(this.server + "/api/login", {}, headers)
      .shareReplay();
  }
}
