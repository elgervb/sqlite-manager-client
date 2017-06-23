import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app.module';
import { Database } from './database.models';
import { FetchDatabaseAction, FetchDatabaseNamesAction } from './database.action';

@Injectable()
export class DatabaseService {

  readonly database$: Observable<Database>;
  readonly databaseNames$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.database$ = this.store.select(state => state.database);
    this.databaseNames$ = this.store.select(state => state.databaseNames);
  }

  getDatabase(name: string): Observable<Database> {
    this.store.dispatch(new FetchDatabaseAction(name));
    return this.database$;
  }

  getDatabaseNames(): Observable<string[]> {
    this.store.dispatch(new FetchDatabaseNamesAction());
    return this.databaseNames$;
  }

}
