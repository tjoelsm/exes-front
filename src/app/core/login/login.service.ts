import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../config/config.service'
import { USUARIO } from '../endpoints/endpoints'

const HTTPHEADERS = {
  headers: new HttpHeaders({  'Content-Type': 'application/json', 
                              'Access-Control-Allow-Headers': 'Content-Type',
                              'Access-Control-Allow-Origin': '*',
                              'Authorization':'eulusi',
                              'Cache-Control': 'no-cache',
                              'Pragma': 'no-cache' })
};

@Injectable()
export class LoginService{
    private headres: any; 
    private ServerWithApiUrl: string;

    constructor(private http: HttpClient, private config:ConfigService) {
      this.headres = new HttpHeaders({  'Content-Type': 'application/json', 
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Authorization':'eulusi' });
    }
    
    public checkEmail(email: string, pass: string) {
      console.log("##### EMAIL ######", this.config.getProperty('back') );
      this.http.get(this.config.getProperty('back') + USUARIO.getUserByEmal + email, HTTPHEADERS)
      .subscribe(response => {
          console.log(response);
          return true;
      }); 
    } 

    public getEmail(email: string, pass: string): Observable<any> {
      console.log("##### EMAIL ######", this.config.getProperty('back') );
      return this.http.
      get<Boolean>(this.config.getProperty('back') + USUARIO.getUserByEmal, { headers: this.headres, params: {'email': email} }); 
    }
}