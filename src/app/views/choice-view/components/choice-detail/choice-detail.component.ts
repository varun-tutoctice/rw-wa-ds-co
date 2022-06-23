import { Component, OnInit } from '@angular/core';
import response from './response.json'
@Component({
  selector: 'app-choice-detail',
  templateUrl: './choice-detail.component.html',
  styleUrls: ['./choice-detail.component.scss']
})
export class ChoiceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(response);
  }

  clickBack() {
    
  }
}
