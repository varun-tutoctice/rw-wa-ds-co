import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WalletViewComponent } from './wallet-view/wallet-view.component';
import { ChoiceViewComponent } from './choice-view/choice-view.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ChoiceViewComponent,
        WalletViewComponent
      ],
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'rewards-component'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('rewards-component');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('rewards-component app is running!');
  // });
});
