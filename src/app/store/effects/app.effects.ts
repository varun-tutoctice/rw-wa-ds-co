import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ChoiceService } from 'src/app/services/choice/choice.service';
import { getChoiceData, getChoiceDataSucess } from '../actions/app.actions';

@Injectable()
export class ChoiceEffects {
   choices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getChoiceData),
      mergeMap(() =>
        this.baseService.getChoiceData().pipe(
          map((choiceData) => getChoiceDataSucess({choiceData})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private baseService:ChoiceService ) {}
}


