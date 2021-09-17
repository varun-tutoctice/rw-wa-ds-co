import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, ComponentFactoryResolver, ViewChild, AfterViewInit, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { WalletViewComponent } from './views/wallet-view/wallet-view.component';
import { ChoiceViewComponent } from './views/choice-view/choice-view.component';
import { SubjectServiceService } from './shared/services/subject-service.service';


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
      ]
    }).compileComponents();
    service = TestBed.inject(SubjectServiceService);
  });


  // beforeEach(() => { // 3
  //   fixture = TestBed.createComponent(AppComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
 

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`getting view input'`, () => {
  //   component.view = 'choice'; // 1
  //   component.data = 'data';

  //   fixture.detectChanges(); // 2
  //   // const compiled = fixture.debugElement.nativeElement; // 2
  //   // expect(compiled.querySelector('p').textContent).toBe('Enter a new title'); // 3
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('rewards-component app is running!');
  // });
});
