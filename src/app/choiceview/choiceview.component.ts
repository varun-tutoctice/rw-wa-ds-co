import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { getChoiceData } from '../store/actions/app.actions';
import { IAppState } from '../store/app.interface';

@Component({
  selector: 'app-choiceview',
  templateUrl: './choiceview.component.html',
  styleUrls: ['./choiceview.component.scss'],
})
export class ChoiceviewComponent implements OnInit {
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
