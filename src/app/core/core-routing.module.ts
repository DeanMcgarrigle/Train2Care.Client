import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// core components
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: "../upload/upload.module#UploadModule"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
