import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WalletViewComponent } from './wallet-view.component';
import { HeaderComponent } from '../../shared/components/header/header.component'

describe('WalletViewComponent', () => {
  let component: WalletViewComponent;
  let fixture: ComponentFixture<WalletViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletViewComponent, HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
