import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DatabaseService } from './database.service';
import { Database } from './database.models';

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
    this.database$ = this.databaseService.getDatabase(this.route.snapshot.params.name);
  }

}
