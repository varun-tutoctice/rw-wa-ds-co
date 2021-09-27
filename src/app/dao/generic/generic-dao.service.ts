import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import * as appConfig from '../../../config/qap.appConfig.json';

@Injectable({
  providedIn: 'root',
})
export class GenericServiceDAO {
  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.getCookie('X-IHG-SSO-TOKEN');
  }

  appConfigData={
    language:''
  }

  cookies = {
    'X-IHG-SSO-TOKEN': '',
  };

  public getCookie(name: string): void {
    let cookie: any = {};
    cookie[name] = this.cookieService.get(name) as string;
    Object.assign(this.cookies, cookie);
  }

  doGet(path: string, params: string = '', language: string, apikey: string) {
    const headers = {
      'X-IHG-SSO-TOKEN': this.cookies['X-IHG-SSO-TOKEN'],
      'IHG-LANGUAGE': this.appConfigData.language,
      'X-IHG-API-KEY': apikey,
    };
    return this.http.get(`${path}${params}`, { headers: headers });
  }

  /** Method created to have AppConfigData extrated from the Parent
   * Subject To Change..
   */
  updateAppConfigData(data:any):void{
    this.appConfigData = data
  }
}
