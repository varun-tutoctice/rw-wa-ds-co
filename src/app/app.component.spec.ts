import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, ComponentFactoryResolver, ViewChild, AfterViewInit, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { WalletViewComponent } from './views/wallet-view/wallet-view.component';
import { ChoiceViewComponent } from './views/choice-view/choice-view.component';
import { SubjectServiceService } from './shared/services/subject-service.service';
import { Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let service: SubjectServiceService;
  let factoryResolver: ComponentFactoryResolver;
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
        SubjectServiceService,
        ComponentFactoryResolver
      ],
      imports: [HttpClientModule],
    }).overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [WalletViewComponent, ChoiceViewComponent] } });
    service = TestBed.inject(SubjectServiceService);
    factoryResolver = TestBed.inject(ComponentFactoryResolver);
  });


  // beforeEach(()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   component = fixture?.componentInstance;
  //   fixture.detectChanges();
  // });

  function setup() {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture?.debugElement?.componentInstance;
    const subjectService = fixture?.debugElement?.injector.get(
      SubjectServiceService
    );
    const componentFactory = fixture?.debugElement?.injector.get(
      ComponentFactoryResolver
    );
    return { fixture, app, subjectService, componentFactory}
  }



  it('should create the app', () => {
    const { fixture, app, subjectService, componentFactory } = setup();
    // fixture.detectChanges();
    expect(app).toBeTruthy();
  });


});
