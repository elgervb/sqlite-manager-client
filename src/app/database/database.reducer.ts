import { ActionReducer, Action } from '@ngrx/store';
import { Database } from './database.models';
import { databaseActionType } from './database.actiontype';

export function databaseReducer(state: Database, action: Action) {
  switch (action.type) {
    case databaseActionType.fetchSuccess :
      return action.payload;

    default:
      return state;
  }
};
