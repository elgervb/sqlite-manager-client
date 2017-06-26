import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app.module';
import { FetchDatabaseNamesAction } from './database-list.action';

@Injectable()
export class DatabaseListService {

  readonly databaseNames$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.databaseNames$ = this.store.select(state => state.databaseNames);
  }

  getDatabaseNames(): Observable<string[]> {
    this.store.dispatch(new FetchDatabaseNamesAction());
    return this.databaseNames$;
  }

}
