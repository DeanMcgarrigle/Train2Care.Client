import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreRoutingModule } from "./core-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// Components
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { NavComponent } from "./nav/nav.component";

// services
import { SharedService } from "./services/shared.service";
import { DataService } from "./services/data.service";
import { AuthenticationService } from "./services/authentication.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { InterceptorService } from "./services/interceptor.service";

// Third Party modules
import { NgxSiemaModule } from "ngx-siema";
import { CheckboxModule } from "primeng/checkbox";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    CheckboxModule,
    NgxSiemaModule.forRoot()
  ],
  exports: [RouterModule, NavComponent],
  declarations: [NotFoundComponent, LoginComponent, NavComponent],
  providers: [SharedService, DataService, AuthenticationService, AuthGuardService, InterceptorService]
})
export class CoreModule {}
