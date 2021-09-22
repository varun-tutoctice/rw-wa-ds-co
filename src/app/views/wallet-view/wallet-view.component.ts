import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wallet-view',
  templateUrl: './wallet-view.component.html',
  styleUrls: ['./wallet-view.component.scss']
})
export class WalletViewComponent implements OnInit {

  @Input() view:any;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
