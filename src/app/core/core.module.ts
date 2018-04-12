import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [NotFoundComponent, LoginComponent, ServicesComponent, NavComponent]
})
export class CoreModule { }
