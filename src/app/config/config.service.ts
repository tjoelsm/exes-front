import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 *
 *
 * @export
 * @class ConfigService
 */
@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  /**
   *
   *
   * @param {*} path
   * @returns
   * @memberof ConfigService
   */
  load(path) {
    sessionStorage.setItem('exes', 'exesweb');
    return new Promise((resolve, reject) => {
      this.http.get(path).subscribe(
        data => {
          sessionStorage.setItem('config', JSON.stringify(data));
          console.log('[LOAD CONFIG] Success');
          resolve(true);
        },
        error => {
          console.log('[LOAD CONFIG] ERROR: ' + error.status + error.message);
        });
    });
  }

  /**
   *
   *
   * @param {*} key
   * @returns
   * @memberof ConfigService
   */
  getProperty(key) {
    const exes = sessionStorage.getItem('exes');
    let config = null;
    if (sessionStorage.getItem('config') !== null) {
      config = JSON.parse(sessionStorage.getItem('config'))[exes];
    }
    let value = '';
    try {
      key.split('.').forEach(function (x) {
        return config = config !== undefined ? config[x] : '';
      });
      if (config && config !== '') {
        value = config;
      }
    } catch ( /** @type {?} */ err) {
      console.log('[GET PROPERTY] ERROR:' + err);
    }
    return value;
  }
   /**
   *
   *
   * @param {*} key
   * @returns
   * @memberof ConfigService
   */
  getAll() {
    let result = null;
    if (sessionStorage.getItem('config') !== null) {
      result = JSON.parse(sessionStorage.getItem('config'));
    }
    return result;
  }
}
