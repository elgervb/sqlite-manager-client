import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { StorageService } from './core/storage/storage.service';

export const storageFactory = () => new StorageService(sessionStorage, 15 * 60);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [
    {
      provide: StorageService,
      useFactory: storageFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
