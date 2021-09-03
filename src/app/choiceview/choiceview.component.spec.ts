import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoiceviewComponent } from './choiceview.component';

describe('ChoiceviewComponent', () => {
  let component: ChoiceviewComponent;
  let fixture: ComponentFixture<ChoiceviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
