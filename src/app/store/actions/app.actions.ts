import { createAction, props } from '@ngrx/store';
import { choiceApp } from '../app.interface';

export const getChoiceData = createAction(
  '[Get Choice Data] called getChoiceData'
);
export const getChoiceDataSucess = createAction(
  '[Choice Data Sucess] getChoiceData Sucesss',
  // (choiceData: choiceApp) => choiceData
  props<{choiceData:choiceApp}>()
);
