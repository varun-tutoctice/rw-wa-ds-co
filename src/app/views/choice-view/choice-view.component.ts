import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choice-view',
  templateUrl: './choice-view.component.html',
  styleUrls: ['./choice-view.component.scss']
})
export class ChoiceViewComponent implements OnInit {

  @Input() view:any;
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
