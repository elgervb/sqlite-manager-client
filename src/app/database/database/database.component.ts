import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Observable } from 'rxjs/Observable';
import { Database } from '../database.models';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  private databaseNames$: Observable<string[]>;
  private database$: Observable<Database>;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.databaseNames$ = this.databaseService.getDatabaseNames();
    this.database$ = this.databaseService.getDatabase(this.route.snapshot.params.name);
  }

}
