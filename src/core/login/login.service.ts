import { Observable, of } from 'rxjs';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../config/config.service'

const HTTPHEADERS = {
  headers: new HttpHeaders({  'Content-Type': 'application/json', 
                              'Access-Control-Allow-Headers': 'Content-Type',
                              'Access-Control-Allow-Origin': '*',
                              'Authorization':'eulusi' })
};

@Injectable()
export class LoginService{
    private ApiUrl: string; 
    private ServerWithApiUrl: string;

    constructor(private http: HttpClient, private config:ConfigService) {
      
    }
    
    public checkEmail(email: string, pass: string){
      console.log("##### EMAIL ######", email);
      //this.http.get(this.config.getProperty('bacback_login') + "getByEmail??email="+email, HTTPHEADERS)
      this.http.get("http://localhost:8080/personas/getByEmail?email="+email, HTTPHEADERS)
      .subscribe(response => {
          console.log(response);
          return true;
      }); 
    }
}