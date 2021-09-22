import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceDescriptionComponent } from './choice-description.component';

describe('ChoiceDescriptionComponent', () => {
  let component: ChoiceDescriptionComponent;
  let fixture: ComponentFixture<ChoiceDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
