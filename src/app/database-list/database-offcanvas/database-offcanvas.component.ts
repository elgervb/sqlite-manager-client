import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-database-offcanvas',
  templateUrl: './database-offcanvas.component.html',
  styleUrls: ['./database-offcanvas.component.scss']
})
export class DatabaseOffcanvasComponent implements OnInit {
  @Input() databaseNames$: Observable<string[]>;

  constructor(private router: Router) { }

  ngOnInit() {}

  routeToDatabase(databaseName: string) {
    this.router.navigate(['/database', databaseName]);
  }

}
