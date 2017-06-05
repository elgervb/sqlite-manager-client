import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DatabaseState } from './database.models';

@Injectable()
export class DatabaseService {

  constructor(private store: Store<DatabaseState>) { }

}
