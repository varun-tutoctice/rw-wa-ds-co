import { Injectable } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { Observable, of } from 'rxjs';
import { choiceApp } from '../store/app.interface';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClientModule,private cookieService: CookieService) {
    this.getCookie('X-IHG-SSO-TOKEN')
   }
  cookies: string | undefined
  baseURL= environment.BaseURL
  choiceURL='/members/benefits/v1/'
  
  getCookie(name:string):void{
    // X-IHG-SSO-TOKEN
    this.cookies = this.cookieService.get(name);
    console.log(this.cookies)
  }

  getChoiceData():Observable<choiceApp>{
    return of({ benefits: [
      {
        benefitId: '',
        benefitName: '',
        benefitType: '',
        milestoneUnits: '',
        milestoneValue: 1,
        choiceSelectionCount: 1,
        choiceExpirationDate: {},
        autoSelectionVoucherDefinitionIds: [],
        categoryDetails: [],
      },
    ],})
  }
}
