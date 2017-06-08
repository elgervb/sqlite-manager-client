import { Action } from '@ngrx/store';
import { databaseActionType } from './database.actiontype';

export class FetchDatabaseAction implements Action {
  type = databaseActionType.fetch;

  constructor(public payload: string) {}
}
