import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { SharedService } from "./core/services/shared.service";
import { Observable } from "rxjs/Observable";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.router.events.subscribe((route: any) => {
      if (this.location.path() !== "") {
        this.sharedService.setAuth(false);
      } else {
        this.sharedService.setAuth(true);
      }
    });

    this.isLoggedIn$ = this.sharedService.isLoggedIn;
  }
}
