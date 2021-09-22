import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChoiceDaoService } from 'src/app/dao/choice/choice-dao.service';
import { Choice } from 'src/app/store/app.interface';



@Injectable({
  providedIn: 'root'
})
export class ChoiceService {

  constructor(private httpService:ChoiceDaoService) {}

  getChoiceData(){
    return this.httpService.getChoiceDao() as Observable<Choice>
  }
    
}
