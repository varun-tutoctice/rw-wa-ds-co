import { Component, Input, OnInit, AfterViewInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { headerMessages } from '@app/shared/messages/headerMessages';
import { SubjectServiceService } from '@app/shared/services/subject-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() view: any;
  messages: any = headerMessages;

  constructor(private subject: SubjectServiceService) { }

  ngOnInit(): void {
  } 

  clickAccount() {
    this.subject.viewInfo.next("home");
  }

  clickWallet() {
    this.subject.viewInfo.next("wallet");
  }


}
