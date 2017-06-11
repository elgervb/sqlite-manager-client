import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app.module';
import { Database } from './database.models';
import { FetchDatabaseAction } from './database.action';

@Injectable()
export class DatabaseService {

  constructor(private store: Store<AppState>) { }

  getDatabase(name: string): Observable<Database> {
    this.store.dispatch(new FetchDatabaseAction(name));
    return this.store.select(state => state.database);
  }

}
