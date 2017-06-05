import { ActionReducer, Action } from '@ngrx/store';
import { Database } from './database.models';

export function databaseReducer(state: Database, action: Action) {
  switch (action.type) {

    default:
      return state;
  }
};
