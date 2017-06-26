import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app.module';
import { Database } from './database.models';
import { FetchDatabaseAction } from './database.action';

@Injectable()
export class DatabaseService {

  readonly database$: Observable<Database>;

  constructor(private store: Store<AppState>) {
    this.database$ = this.store.select(state => state.database);
  }

  getDatabase(name: string): Observable<Database> {
    this.store.dispatch(new FetchDatabaseAction(name));
    return this.database$;
  }

}
