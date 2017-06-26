import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-database-offcanvas',
  templateUrl: './database-offcanvas.component.html',
  styleUrls: ['./database-offcanvas.component.scss']
})
export class DatabaseOffcanvasComponent implements OnInit {
  @Input() databaseNames$: Observable<string[]>;

  constructor() { }

  ngOnInit() {}

}
