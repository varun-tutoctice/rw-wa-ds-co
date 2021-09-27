import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoiceViewComponent } from './choice-view.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { IAppState } from '@app/store/app.interface';
import { getChoiceData } from '@app/store/actions/app.actions';

describe('ChoiceViewComponent', () => {
  let component: ChoiceViewComponent;
  let fixture: ComponentFixture<ChoiceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceViewComponent, HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
