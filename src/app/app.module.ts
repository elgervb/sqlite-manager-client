import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { RouterState, RouterStoreModule } from '@ngrx/router-store';

import { DatabaseListModule } from './database-list/database-list.module';
import { DatabaseListEffects } from './database-list/database-list.effects';

import { EffectsModule } from '@ngrx/effects';
import { DatabaseEffects } from './database/database.effects';
import { Database } from './database/database.models';

import { reducer } from './app.reducers';

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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    DatabaseListModule,
    EffectsModule.run(DatabaseEffects),
    EffectsModule.run(DatabaseListEffects),
    FormsModule,
    HttpModule,
    SharedModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule,
    RouterStoreModule.connectRouter()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
