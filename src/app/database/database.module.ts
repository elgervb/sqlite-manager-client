import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService } from './database.service';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  imports: [
    CommonModule,
    DatabaseRoutingModule
  ],
  declarations: [DatabaseComponent],
  providers: [
    DatabaseService
  ]
})
export class DatabaseModule { }
