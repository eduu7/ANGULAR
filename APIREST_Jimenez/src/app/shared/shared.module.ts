import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../Modules/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
