import { environment } from '../environments/environment';
import { compose } from '@ngrx/core/compose';

import { combineReducers, provideStore } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { routerReducer } from '@ngrx/router-store';
import { databaseReducer } from './database/database.reducer';
import { databaseNamesReducer } from './database-list/database-names.reducer';

const reducers = {
  database: databaseReducer,
  databaseNames: databaseNamesReducer,
  router: routerReducer
};

const developmentReducer = compose(storeFreeze, combineReducers)(reducers);
const productionReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  return developmentReducer(state, action);
}
