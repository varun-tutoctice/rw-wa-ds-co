import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  public viewInfo: Subject<any> = new Subject();


  constructor() { }
}
