import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseModule } from './database/database.module';

const routes: Routes = [
  {
    path: 'database',
    loadChildren: () => DatabaseModule
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
