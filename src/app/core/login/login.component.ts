import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { NgxSiemaOptions, NgxSiemaService } from "ngx-siema";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  logo: any;
  version: string;
  rememberMe: boolean;

  // carousel vars
  currentSlide = 0;
  carouselOptions: NgxSiemaOptions = {
    selector: ".siema",
    duration: 250,
    easing: "ease-in-out",
    perPage: 1,
    startIndex: 0,
    draggable: false,
    threshold: 20,
    loop: false,
    onInit: () => {
      // runs immediately after first initialization
    },
    onChange: () => {
      // runs after slide change
    }
  };

  constructor(private siema: NgxSiemaService) {
    this.logo = require("../../../assets/img/logo-notext-ps.png");
    this.version = environment.version;
    this.rememberMe = false;
  }

  ngOnInit() {}

  // moves slider to the left
  slideSelect(sel, slide) {
    console.log(slide);
    this.siema.goTo(slide, sel).subscribe((data: any) => {
      // tslint:disable-next-line:no-unused-expression
      data != null ? (this.currentSlide = data.currentSlide) : 0;
    });
    // if (slide >= 0) {
    //   this.siema.next(1).subscribe((data: any) => {
    //     // tslint:disable-next-line:no-unused-expression
    //     data != null ? (this.currentSlide = data.currentSlide) : 0;
    //   });
    // } else {
    //   this.siema.prev(0).subscribe((data: any) => {
    //     // tslint:disable-next-line:no-unused-expression
    //     data != null ? (this.currentSlide = data.currentSlide) : 0;
    //   });
    // }

    // console.log(this.currentSlide);
  }

  login() {
    console.log("logging in");

    $("#login-button").addClass("onclick");
    setTimeout(() => {
      this.validate();
    }, 250);
  }

  validate() {
    console.log("validating");
    setTimeout(() => {
      $("#login-button").removeClass("onclick");
      $("#login-button").addClass("validate");
      this.callback();
    }, 2250);
  }

  callback() {
    console.log("callback");
    setTimeout(function() {
      $("#login-button").removeClass("validate");
    }, 4250);
  }
}
