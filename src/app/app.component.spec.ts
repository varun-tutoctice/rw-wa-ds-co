import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, ComponentFactoryResolver, ViewChild, AfterViewInit, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { WalletViewComponent } from './views/wallet-view/wallet-view.component';
import { ChoiceViewComponent } from './views/choice-view/choice-view.component';
import { SubjectServiceService } from './shared/services/subject-service.service';
import { Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';


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
      ]
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


  // it('should dynamically create a component binding', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.componentInstance.ngAfterViewInit();
  //   console.log("Fixture", fixture);
  //   // component.view = "choice";
  //   // component.ngAfterViewInit();
  //   // const mockData = ""
  //   // const spy = spyOn(subjectService, 'viewInfo' as any).and.returnValue(
  //   //   Observable.create((observer: any)=>{
  //   //     observer.next(mockData);
  //   //     return observer;
  //   //   })
  //   // )
  // });


  // // it('should set pageLoaded after view init', () => {
  // //   //component.view = "choice"
  // //   const { fixture, app, subjectService } = setup();
  // //   fixture.detectChanges();
  // //   component.view = "choice";
  // //   component.ngAfterViewInit();
  // //   const mockData = ""
  // //   const spy = spyOn(service, 'viewInfo' as any).and.returnValue(
  // //     Observable.create((observer: any)=>{
  // //       observer.next(mockData);
  // //       return observer;
  // //     })
  // //   )
  // // });



  
  // // it(`Data needs to be emitted on header click`, () => {
  // //   // const { fixture, app, subjectService } = setup();
  // //   const fixture = TestBed.createComponent(AppComponent);
  // //   fixture.detectChanges();
  // //   const mockData = ""
  // //   const spy = spyOn(service, 'viewInfo' as any).and.returnValue(
  // //     Observable.create((observer: any)=>{
  // //       observer.next(mockData);
  // //       return observer;
  // //     })
  // //   )

  // // });



  // // it('should render title', () => {
  // //   const fixture = TestBed.createComponent(AppComponent);
  // //   fixture.detectChanges();
  // //   const compiled = fixture.nativeElement as HTMLElement;
  // //   expect(compiled.querySelector('.content span')?.textContent).toContain('rewards-component app is running!');
  // // });
});
