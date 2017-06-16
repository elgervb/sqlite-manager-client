import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { RouterState, routerReducer, RouterStoreModule } from '@ngrx/router-store';
import { databaseReducer } from './database/database.reducer';
import { databaseNamesReducer } from './database/database-names.reducer';

import { EffectsModule } from '@ngrx/effects';
import { DatabaseEffects } from './database/database.effects';

import { compose } from '@ngrx/core/compose';
import { combineReducers, provideStore } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { Database } from './database/database.models';

export interface AppState {
  router: RouterState;
  database: Database;
  databaseNames: string[];
};

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: false, position: 'right' })
  };
}

const metaReducers = environment.production
  ? [combineReducers]
  : [storeFreeze, combineReducers];

export const store = compose(...metaReducers)({
  database: databaseReducer,
  databaseNames: databaseNamesReducer,
  router: routerReducer
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    EffectsModule.run(DatabaseEffects),
    FormsModule,
    HttpModule,
    SharedModule,
    StoreModule.provideStore(store),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule,
    RouterStoreModule.connectRouter()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
