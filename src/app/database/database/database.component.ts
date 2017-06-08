import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Database } from '../database.models';
import { DatabaseService } from '../database.service';

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

    this.database$.subscribe((d) => {
      console.log(d);
    });
    this.databaseService.getDatabase('counties');
  }

}
