import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formLogin: FormGroup = this.fb.group(
    {
      user_name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      password:new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      isAdmin:new FormControl()
    }
  )
  
  constructor( 
    private sservice: SharedService,
    private sesionService: SesionService,
    private router: Router,
    private fb:FormBuilder
    ) { 
      // console.log('ctor')
      // this.sservice.setTitle("Login");

     
    
  }

  ngOnInit(): void {
  }

  login(){
    // console.log('is admin'+ this.formLogin.value.isAdmin);
    this.sesionService.login(this.formLogin.value.user_name,
       this.formLogin.value.password, this.formLogin.value.isAdmin);
    this.router.navigate(['inicio']);
  }


}
