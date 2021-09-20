import { ComponentFixture, TestBed,  async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, ComponentFactoryResolver, ViewChild, AfterViewInit, OnInit, Input, Output, EventEmitter, ViewContainerRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { WalletViewComponent } from './views/wallet-view/wallet-view.component';
import { ChoiceViewComponent } from './views/choice-view/choice-view.component';
import { SubjectServiceService } from './shared/services/subject-service.service';
import { Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';


describe('AppComponent', () => {
  let service: SubjectServiceService;
  let component: AppComponent;
  
  let fixture: ComponentFixture<AppComponent>;
  let choice: ChoiceViewComponent;
  let wallet: WalletViewComponent;
  let componentFactoryResolver: ComponentFactoryResolver;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WalletViewComponent,
        ChoiceViewComponent
      ],
      providers: [
        SubjectServiceService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [WalletViewComponent, ChoiceViewComponent] } });
    service = TestBed.inject(SubjectServiceService);
  });


  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AppComponent);
  //   component = fixture.componentInstance;
  // });

  function setup() {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const subjectService = fixture.debugElement.injector.get(
      SubjectServiceService
    );
    return { fixture, app, subjectService}
  }

  // it('should create with a balance avaliable in the session', () => {
  //   fixture.detectChanges();
  //   expect(component).toBeUndefined();
  // });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should get the string from header and emit to rewards component`, fakeAsync(() => {

  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;

  //   app.ngAfterViewInit()
  //   // let ngOnInitFn = ChoiceViewComponent.prototype.ngOnInit;
  //   // ChoiceViewComponent.prototype.ngOnInit = () => {} // override ngOnInit

  //   // tick();
  
  //   // fixture.detectChanges(); 
  //   // ChoiceViewComponent.prototype.ngOnInit = ngOnInitFn; // revert ngOnInit
  
  //  // expect(comp.userList.length).toBe(3, 'user list after function call');
  // }));


  
});
