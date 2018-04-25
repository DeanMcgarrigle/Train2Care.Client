import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { SharedService } from "../services/shared.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  logo: any;

  constructor(private sharedService: SharedService) {
    this.logo = require("../../../assets/img/logo-ps-white.png");
  }

  ngOnInit() {}
}
