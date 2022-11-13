import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../Modules/material.module';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers:[
    SharedService
  ]
})
export class SharedModule { }
