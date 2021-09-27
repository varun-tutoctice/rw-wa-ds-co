import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { IAppState } from '@app/store/app.interface';
import { getChoiceData } from '@app/store/actions/app.actions';

@Component({
  selector: 'app-choice-view',
  templateUrl: './choice-view.component.html',
  styleUrls: ['./choice-view.component.scss'],
})
export class ChoiceViewComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}
  @Input() view: any;
  @Input() data: any;
  choiceData$: any;

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
