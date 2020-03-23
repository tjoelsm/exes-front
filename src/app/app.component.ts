import { Component, OnInit } from '@angular/core';
import { LoginService } from '../app/core/login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion de Gastos Futuros';

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
