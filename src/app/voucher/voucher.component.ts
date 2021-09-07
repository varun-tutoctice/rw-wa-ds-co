import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {

  }

}
