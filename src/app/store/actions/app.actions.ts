import { createAction, props } from '@ngrx/store';
import { Choice } from '../app.interface';

export const getChoiceData = createAction(
  '[Get Choice Data] called getChoiceData'
);
export const getChoiceDataSucess = createAction(
  '[Choice Data Sucess] getChoiceData Sucesss',
  props<{choiceData:Choice}>()
);
