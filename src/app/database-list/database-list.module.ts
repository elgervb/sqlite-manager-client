import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { DatabaseOffcanvasComponent } from './database-offcanvas/database-offcanvas.component';
import { DatabaseListService } from './database-list.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [DatabaseOffcanvasComponent],
  exports: [DatabaseOffcanvasComponent],
  providers: [DatabaseListService]
})
export class DatabaseListModule { }
