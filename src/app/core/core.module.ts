import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreRoutingModule } from "./core-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Components
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { NavComponent } from "./nav/nav.component";

// services
import { SharedService } from "./services/shared.service";

// Third Party modules
import { NgxSiemaModule } from "ngx-siema";
import { CheckboxModule } from "primeng/checkbox";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    CheckboxModule,
    NgxSiemaModule.forRoot()
  ],
  exports: [RouterModule, NavComponent],
  declarations: [NotFoundComponent, LoginComponent, NavComponent],
  providers: [SharedService]
})
export class CoreModule {}
