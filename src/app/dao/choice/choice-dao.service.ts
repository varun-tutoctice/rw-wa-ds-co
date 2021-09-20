import { Injectable } from '@angular/core';
import { GenericServiceDAO } from '../generic/generic-dao.service';
import appConfigD from '../../../config/qap.appConfig.json';

@Injectable({
  providedIn: 'root'
})
export class ChoiceDaoService  {
  constructor(private genericService: GenericServiceDAO){}

  getChoiceDao(){
    const path = appConfigD.appConfig.default.choice.url 
    const apikey =  appConfigD.appConfig.default.choice.apiKey
    return this.genericService.doGet(path,"","en-us",apikey)
  }

  
}
