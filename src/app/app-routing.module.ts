import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseModule } from './database/database.module';

export function loadModule(module) {
  return module;
}

export const routes: Routes = [
  {
    path: 'database',
    loadChildren: loadModule(DatabaseModule)
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
