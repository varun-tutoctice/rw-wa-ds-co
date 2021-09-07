import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choiceview',
  templateUrl: './choiceview.component.html',
  styleUrls: ['./choiceview.component.scss']
})
export class ChoiceviewComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {

  }

}
