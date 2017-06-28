import { Action } from '@ngrx/store';
import { databaseListActionType } from './database-list.actiontype';

export class FetchDatabaseNamesAction implements Action {
  type = databaseListActionType.fetchNames;
}

export class AddDatabaseAction implements Action {
  type = databaseListActionType.addDatabase;

  constructor(public payload: string) {}
}
