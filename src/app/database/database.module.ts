import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { DatabaseService } from './database.service';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './database.component';
import { DatabaseNavigationComponent } from './database-navigation/database-navigation.component';
import { DatabaseOffcanvasComponent } from './database-offcanvas/database-offcanvas.component';

@NgModule({
  imports: [
    CommonModule,
    DatabaseRoutingModule,
    SharedModule
  ],
  declarations: [DatabaseComponent, DatabaseNavigationComponent, DatabaseOffcanvasComponent],
  providers: [
    DatabaseService
  ]
})
export class DatabaseModule { }
