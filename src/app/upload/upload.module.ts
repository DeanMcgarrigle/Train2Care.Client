import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';

@NgModule({
  imports: [
    CommonModule,
    UploadRoutingModule
  ],
  declarations: [UploadComponent]
})
export class UploadModule { }
