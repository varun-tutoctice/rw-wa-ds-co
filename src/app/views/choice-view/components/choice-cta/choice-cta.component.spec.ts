import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceCtaComponent } from './choice-cta.component';

describe('ChoiceCtaComponent', () => {
  let component: ChoiceCtaComponent;
  let fixture: ComponentFixture<ChoiceCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
