import { Component, Input, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { headerMessages } from '@app/shared/messages/headerMessages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() view: any;
  messages: any = headerMessages;

  constructor() { }

  ngOnInit(): void {
    console.log(this.messages['choice'].header)
  } 


}
