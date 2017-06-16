import { Action } from '@ngrx/store';
import { databaseActionType } from './database.actiontype';

export class FetchDatabaseAction implements Action {
  type = databaseActionType.fetch;

  constructor(public payload: string) { }
}

export class FetchDatabaseNamesAction implements Action {
  type = databaseActionType.fetchNames;

  constructor() {}
}

