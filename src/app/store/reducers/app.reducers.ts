import { Action, createReducer, on } from '@ngrx/store';
import { getChoiceData, getChoiceDataSucess } from '../actions/app.actions';
import { IAppState, initialAppState } from '../app.interface';

export const _appReducer = createReducer(
  initialAppState,
  on(getChoiceData, (state) => {
    return {
      ...state,
    };
  }),
  on(getChoiceDataSucess, (state,{choiceData}) => {
  return {
    ...state,
    choice:choiceData
  };
})
);

export function appReducer(state: IAppState, action: Action) {
  return _appReducer(state, action);
}

/**
 * Reducer List to Add to app.module.ts */
export const ReducersList = {
    choice:_appReducer
}