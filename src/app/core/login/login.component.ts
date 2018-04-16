import {
  Component,
  OnInit,
  trigger,
  transition,
  style,
  animate
} from "@angular/core";
import { environment } from "../../../environments/environment";
import { fadeInAnimation } from "../../_animations/animations";
import { NgxSiemaOptions, NgxSiemaService } from "ngx-siema";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [
    fadeInAnimation,
    trigger("fadeInOut", [
      transition(":enter", [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(250, style({ opacity: 1 }))
      ]),
      transition(":leave", [
        // :leave is alias to '* => void'
        animate(250, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  logo: any;
  version: string;
  rememberMe: boolean;
  regSuccess: boolean;

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
    this.regSuccess = false;
  }

  ngOnInit() {}

  // moves slider to the left
  slideSelect(sel, slide) {
    console.log(slide);
    this.siema.goTo(slide, sel).subscribe((data: any) => {
      // tslint:disable-next-line:no-unused-expression
      data != null ? (this.currentSlide = data.currentSlide) : 0;
    });
  }

  login(e) {
    console.log("logging in", e);

    $("#" + e.target.id).addClass("onclick");
    setTimeout(() => {
      this.validate(e.target.id);
    }, 250);
  }

  register(e) {
    $("#" + e.target.id).addClass("onclick");
    setTimeout(() => {
      this.validate(e.target.id);
    }, 250);
  }

  validate(sel) {
    console.log("validating", sel);
    setTimeout(() => {
      $("#" + sel).removeClass("onclick");
      $("#" + sel).addClass(
        sel === "register-button" ? "register-validate" : "validate"
      );
      sel === "register-button"
        ? (this.regSuccess = true)
        : (this.regSuccess = false);
      this.callback(sel);
    }, 2250);
  }

  callback(sel) {
    console.log("callback", this.regSuccess);
    setTimeout(() => {
      $("#" + sel).removeClass(
        sel === "register-button" ? "register-validate" : "validate"
      );
      if (sel === "register-button") {
        this.regSuccess = false;
        this.slideSelect(".siema", 0);
      } else {
        // login?
      }
      console.log("callback", this.regSuccess);
    }, 4250);
  }
}
