import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchmap';
import 'rxjs/add/observable/of';

import { databaseActionType } from './database.actiontype';

@Injectable()
export class DatabaseEffects {

  @Effect() fetch$ = this.actions$
    .ofType(databaseActionType.fetch)
    .map(action => action.payload)
    .switchMap(
      payload => this.http.get(`http://localhost:4000/database/${payload}`)
      .map(res => ({type: databaseActionType.fetchSuccess, payload: res.json()}))
      .catch(() => Observable.of({type: databaseActionType.fetchFail}))
    );

  @Effect() fetchNames$ = this.actions$
    .ofType(databaseActionType.fetchNames)
    .switchMap(
      () => this.http.get('http://localhost:4000/database')
      .map(res => ({type: databaseActionType.fetchNamesSuccess, payload: res.json()}))
      .catch(() => Observable.of({type: databaseActionType.fetchNamesFail}))
    );

  constructor(
    private http: Http,
    private actions$: Actions
  ) {}
}
