import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'path';
import FICH from "../config.json";

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { 
    
  }

  load(path) {
  return new Promise((resolve, reject) => {
  this.http.get(path).subscribe(
    data => {
      console.log('[LOAD CONFIG DATA] Success:', data);
      sessionStorage.setItem('config', JSON.stringify(data));
      //sessionStorage.setItem('config', FICH );
      console.log('[LOAD CONFIG] Success:');
      console.log(JSON.parse(sessionStorage.getItem('config')));
      resolve(true);
    },
    error => {
      console.log('[LOAD CONFIG] ERROR: ' + error.status + error.message);
    });
})
}

getProperty(key) {
  let config = JSON.parse(sessionStorage.getItem('config'));
  //let config = FICH; 
  console.log('[CONFIG]:' + config);
  
  let value = '';
  try {
    key.split('.').forEach(function (x) { return config = config !== undefined ? config[x] : ''; });
    if (config && config !== '') {
      value = config;
      console.log('[value] : ' + value);
    }
  } catch (/** @type {?} */ err) {
    console.log('[GET PROPERTY] ERROR:' + err);
  }
  return value;
}

}
