import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Observable } from 'rxjs/Observable';
import { Database } from '../database.models';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  private database$: Observable<Database>;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.database$ = this.databaseService.getDatabase('counties');
  }

}
