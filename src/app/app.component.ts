import { Component, ComponentFactoryResolver, ViewChild, AfterViewInit, OnInit, Input } from '@angular/core';
import { VoucherComponent } from './voucher/voucher.component';
import { ViewContainerRef } from '@angular/core';
import { ChoiceviewComponent } from './choiceview/choiceview.component';



@Component({
  selector: 'custom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef: any;
  @Input() view: any;
  @Input() data: any;

  mappingView: any = [
    {'name':'voucher', 'component':VoucherComponent},
    {'name':'choice', 'component': ChoiceviewComponent},
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  ngOnInit(): void {
    /* Comment Out When Building*/
    this.view = 'choice'
  }


  ngAfterViewInit() {
    let viewData = this.mappingView.find((data: { name: string; }) => data.name === this.view);
    const factory = this.componentFactoryResolver.resolveComponentFactory(viewData.component);
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
    ref.instance.data = this.data;
  }


}