import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { DatabaseNavigationComponent } from './database-navigation/database-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: DatabaseComponent
  },
  {
    path: '',
    component: DatabaseNavigationComponent,
    outlet: 'nav'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
