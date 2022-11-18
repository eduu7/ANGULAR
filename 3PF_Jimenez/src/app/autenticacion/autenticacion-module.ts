import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
 
import { SharedModule } from '../shared/shared.module';
import { AutenticacionRoutingModule } from './autenticacion-routing';
import { MaterialModule } from '../Modules/material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,    
    AutenticacionRoutingModule,
    SharedModule
  ]
})
export class AutenticacionModule { }
