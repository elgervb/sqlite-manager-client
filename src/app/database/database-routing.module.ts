import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { DatabaseNavigationComponent } from './database-navigation/database-navigation.component';

export const routes: Routes = [
  {
    path: ':name',
    component: DatabaseComponent
  },
  {
    path: '',
    component: DatabaseNavigationComponent,
    outlet: 'offcanvas'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
