import { Injectable } from '@angular/core';
import { GenericServiceDAO } from '../generic/generic-dao.service';
import appConfigD from '../../../config/qap.appConfig.json';

@Injectable({
  providedIn: 'root'
})
export class ChoiceDaoService  {
  path:string ='';
  apiKey:string ='';
  constructor(private genericService: GenericServiceDAO){
    /**Script to load default or China appConfig
     * In Future can turn into Class for access in any service.
     */
    const hostName = window.location.hostname
    if(hostName.includes('.cn')){
      this.path = appConfigD.appConfig.china.choice.url
      this.apiKey= appConfigD.appConfig.china.choice.apiKey
    }else{
      this.path = appConfigD.appConfig.default.choice.url 
      this.apiKey= appConfigD.appConfig.default.choice.apiKey
    }

  }

  getChoiceDao(){ 
    return this.genericService.doGet(this.path,"","en-us",this.apiKey)
  }


}
