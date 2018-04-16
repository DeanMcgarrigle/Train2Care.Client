import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class SharedService {
  private isAuthorised = new BehaviorSubject<boolean>(false);

  isLoggedIn = this.isAuthorised.asObservable();

  constructor() {}

  setAuth(status) {
    this.isAuthorised.next(status);
  }
}
