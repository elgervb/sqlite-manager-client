import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchmap';
import 'rxjs/add/observable/of';

import { databaseListActionType } from './database-list.actiontype';

@Injectable()
export class DatabaseListEffects {

  @Effect() addDatabase$ = this.actions$
    .ofType(databaseListActionType.addDatabase)
    .map((action) => action.payload)
    .switchMap(
      (payload) => this.http.post('http://localhost:4000/database', {dbname: payload})
      .map(res => ({type: databaseListActionType.addDatabaseSuccess, payload: res.json()}))
      .catch(() => Observable.of({type: databaseListActionType.addDatabaseFail}))
    );

  @Effect() fetchNames$ = this.actions$
    .ofType(databaseListActionType.fetchNames)
    .switchMap(
      () => this.http.get('http://localhost:4000/database')
      .map(res => ({type: databaseListActionType.fetchNamesSuccess, payload: res.json()}))
      .catch(() => Observable.of({type: databaseListActionType.fetchNamesFail}))
    );

  constructor(
    private http: Http,
    private actions$: Actions
  ) {}
}
