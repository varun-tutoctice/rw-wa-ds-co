import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { getChoiceData } from '../store/actions/app.actions';
import { IAppState } from '../store/app.interface';

@Component({
  selector: 'app-choice-view',
  templateUrl: './choice-view.component.html',
  styleUrls: ['./choice-view.component.scss']
})
export class ChoiceViewComponent implements OnInit {

  @Input() data: any;

  choiceData$: any;
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getChoiceData());
    this.store
      .select('choice')
      .pipe(take(2))
      .subscribe((res) => {
        console.log('Choice Data', res);
      });
  }

}
