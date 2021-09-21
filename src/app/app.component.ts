import { Component, ComponentFactoryResolver, ViewChild, AfterViewInit, OnInit, Input } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { WalletViewComponent } from './wallet-view/wallet-view.component';
import { ChoiceViewComponent } from './choice-view/choice-view.component';
import { GenericServiceDAO } from './dao/generic/generic-dao.service';

@Component({
  selector: 'custom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef: any;
  @Input() view: any;
  /** May Change but currently pass language from parent */
  @Input() data: any={language:'en-us'}

  mappingView: any = [
    {'name':'wallet', 'component': WalletViewComponent},
    {'name':'choice', 'component': ChoiceViewComponent},
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private generalService: GenericServiceDAO) { }


  ngOnInit(): void {
    /* Comment Out When Building*/
    // this.view = 'choice'
    this.generalService.updateAppConfigData(this.data)

  }


  ngAfterViewInit() {
    let viewData = this.mappingView.find((data: { name: string; }) => data.name === this.view);
    const factory = this.componentFactoryResolver.resolveComponentFactory(viewData.component);
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
    ref.instance.data = this.data;
  }


}