import { ActionReducer, Action } from '@ngrx/store';
import { Database } from './database.models';
import { databaseActionType } from './database.actiontype';

export function databaseNamesReducer(state: Database[], action: Action) {
  switch (action.type) {
    case databaseActionType.fetchNamesSuccess :
      return action.payload;

    default:
      return state;
  }
};
