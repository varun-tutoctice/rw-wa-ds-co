import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoiceViewComponent } from './choice-view.component';

describe('ChoiceViewComponent', () => {
  let component: ChoiceViewComponent;
  let fixture: ComponentFixture<ChoiceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
