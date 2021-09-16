import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { choiceApp } from 'src/app/store/app.interface';
import { GenericServiceDAO } from '../generic/generic-dao.service';
import appConfigD from '../../../config/qap.appConfig.json';

@Injectable({
  providedIn: 'root'
})
export class ChoiceDaoService extends GenericServiceDAO  {

  getChoiceDao(){
    const path = appConfigD.appConfig.default.choice.url 
    const apikey =  appConfigD.appConfig.default.choice.apiKey
    return this.doGet(path,"","en-us",apikey)
  }
}
