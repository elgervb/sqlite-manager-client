import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Observable } from 'rxjs/Observable';
import { Database } from '../database.models';

@Component({
  selector: 'app-database-navigation',
  templateUrl: './database-navigation.component.html',
  styleUrls: ['./database-navigation.component.scss']
})
export class DatabaseNavigationComponent implements OnInit {

  private database$: Observable<Database>;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.database$ = this.databaseService.getDatabase(this.route.snapshot.params.name);
  }

}
