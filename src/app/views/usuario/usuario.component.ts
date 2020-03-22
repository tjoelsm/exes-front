import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../core/login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

 
  loginForm: FormGroup
  private subscription: Subscription; 

  //constructor(private http: HttpClient, private config: ConfigService) { 
  constructor(private http: HttpClient, private login: LoginService) { 
    //this.SERVER = this.config.getProperty('back');
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl
   });
  }

  ngOnInit() {
  
  }
  
  checkEmail(){
    console.log("##### EMAIL ######", this.loginForm.value.email);
    let auth = this.login.checkEmail(this.loginForm.value.email,this.loginForm.value.password);
  }

}
