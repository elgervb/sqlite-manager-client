import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app.module';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AddDatabaseAction } from '../database-list.action';

@Component({
  selector: 'app-database-offcanvas',
  templateUrl: './database-offcanvas.component.html',
  styleUrls: ['./database-offcanvas.component.scss']
})
export class DatabaseOffcanvasComponent implements OnInit {
  @Input() databaseNames$: Observable<string[]>;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {}

  addDatabase(databaseName: string): void {
    this.store.dispatch(new AddDatabaseAction(databaseName));
  }

  routeToDatabase(databaseName: string) {
    this.router.navigate(['/database', databaseName]);
  }

}
