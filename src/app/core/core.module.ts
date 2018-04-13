import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreRoutingModule } from "./core-routing.module";

// Components
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { ServicesComponent } from "./services/services.component";
import { NavComponent } from "./nav/nav.component";

// Third Party modules
import { NgxSiemaModule } from "ngx-siema";
import { CheckboxModule } from "primeng/checkbox";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    CheckboxModule,
    NgxSiemaModule.forRoot()
  ],
  exports: [RouterModule],
  declarations: [
    NotFoundComponent,
    LoginComponent,
    ServicesComponent,
    NavComponent
  ]
})
export class CoreModule {}
