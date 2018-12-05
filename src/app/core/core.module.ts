import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { BackendService } from './backend/backend.service';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
  ],
  providers: [
    BackendService
  ]
})
export class CoreModule { }
