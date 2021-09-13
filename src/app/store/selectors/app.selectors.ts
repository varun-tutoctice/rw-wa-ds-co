
import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.interface';


export const selectChoice = (state: IAppState) => state.choice;