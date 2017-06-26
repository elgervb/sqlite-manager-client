import { ActionReducer, Action } from '@ngrx/store';
import { databaseListActionType } from './database-list.actiontype';

export function databaseNamesReducer(state: string[], action: Action) {
  switch (action.type) {
    case databaseListActionType.fetchNamesSuccess :
      return action.payload;

    default:
      return state;
  }
};
