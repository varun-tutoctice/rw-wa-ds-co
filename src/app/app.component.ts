import { Component, ComponentFactoryResolver, ViewChild, AfterViewInit, OnInit, Input } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { WalletViewComponent } from './wallet-view/wallet-view.component';
import { ChoiceViewComponent } from './choice-view/choice-view.component';

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
    {'name':'wallet', 'component': WalletViewComponent},
    {'name':'choice', 'component': ChoiceViewComponent},
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  ngOnInit(): void {
    //this.view = 'wallet'
  }


  ngAfterViewInit() {
    let viewData = this.mappingView.find((data: { name: string; }) => data.name === this.view);
    const factory = this.componentFactoryResolver.resolveComponentFactory(viewData.component);
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
    ref.instance.data = this.data;
  }


}