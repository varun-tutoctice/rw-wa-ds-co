import { GenericServiceDAO } from './dao/generic/generic-dao.service';
import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  AfterViewInit,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { WalletViewComponent } from './views/wallet-view/wallet-view.component';
import { ChoiceViewComponent } from './views/choice-view/choice-view.component';
import { SubjectServiceService } from './shared/services/subject-service.service';
@Component({
  selector: 'custom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef: any;
  @Output() viewInfo: EventEmitter<string> = new EventEmitter<string>();
  @Input() view: any;
  /** May Change but currently pass language from parent */
  @Input() data: any = { language: 'en-us' };

  mappingView: any = [
    { name: 'wallet', component: WalletViewComponent },
    { name: 'choice', component: ChoiceViewComponent },
  ];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private generalService: GenericServiceDAO,
    private subject: SubjectServiceService
  ) {}

  ngOnInit(): void {
    /* Comment Out When Building*/
    this.view = 'choice'
    this.generalService.updateAppConfigData(this.data);
    this.subject.viewInfo.subscribe((data) => {
      this.viewInfo.emit(data);
    });
  }

  ngAfterViewInit() {
    let viewData = this.mappingView.find(
      (data: { name: string }) => data.name === this.view
    );
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      viewData.component
    );
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
    ref.instance.data = this.data;
    ref.instance.view = this.view;
  }
}
