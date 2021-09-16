import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import * as appConfig from '../../../config/qap.appConfig.json';


@Injectable({
  providedIn: 'root'
})
export class GenericServiceDAO {

  constructor(private http:HttpClient,private cookieService: CookieService) {
    this.getCookie('X-IHG-SSO-TOKEN')
   }

   cookies= {
    'X-IHG-SSO-TOKEN':''
   }
  
  getCookie(name:string):void{
    // X-IHG-SSO-TOKEN
    let cookie:any ={} 
    // cookie[name] =  this.cookieService.get(name) as string
    cookie[name]="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJFUTBNVVE1TjBOQ1JUSkVNemszTTBVMVJrTkRRMFUwUTBNMVJFRkJSamhETWpkRU5VRkJRZyJ9.eyJpc3MiOiJodHRwczovL2ZpZG0uZ2lneWEuY29tL2p3dC80X3liRFBJOW1taTBFb0JxazNQVkdKWUEvIiwiYXBpS2V5IjoiNF95YkRQSTltbWkwRW9CcWszUFZHSllBIiwiaWF0IjoxNjMxNzk3NzUwLCJleHAiOjE2MzE4MDEzNTAsInN1YiI6ImVkYTQwMjQxLWJjZTktNDg5MS05N2VjLTg3YjhhNmE2N2FmOSIsImZpcnN0TmFtZSI6IlRFU1QiLCJkYXRhLnJjTWVtYmVyc2hpcE51bWJlciI6IjE1ODA2MzM3MCIsImRhdGEubWVtYmVyS2V5IjoxNTAwMzU3ODMwMDF9.IsSD1mUOvQvMf3SCJZlwYjR1ILnhYQcElOrFna5gdHbg5VgoAMg1tVIEBEBe6PyIVX0Ir82q1dWG0jdG7dlvlwSelZ3yZ_aElZPIljFMCW23iKbBW8epuTS-0PDXiAGUBCmy1WtBhwffljbVXX4B4woS8a6UwcvUekuoFfa4oN4oTpklRFbyXDyrCroFe4cNTM0JYti9SUDViJ4nFqpLIZx2gwgIAHu-J6hHZ6poXVo4lq-2FnDLNG35FKfDGJb71iHIaLHKaCBKuFhb9Vw1kuGVnhdfuH3pKKdCipB-IZwmZ37WaEOfr_3BF8Ue9RpcdyBuV6CIW2NHWLx3cMplcA"
    Object.assign(this.cookies,cookie)
    console.log(this.cookies)
  }

  doGet(path:string,params:string='',language:string,apikey:string) {
    const headers ={
      'X-IHG-SSO-TOKEN':this.cookies['X-IHG-SSO-TOKEN'],
      'IHG-LANGUAGE':language,
      'X-IHG-API-KEY':apikey
    }
    return this.http.get(`${path}${params}`,{headers:headers})
  };


}