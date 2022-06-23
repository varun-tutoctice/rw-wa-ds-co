import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceDetailComponent } from './choice-detail.component';

describe('ChoiceDetailComponent', () => {
  let component: ChoiceDetailComponent;
  let fixture: ComponentFixture<ChoiceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
