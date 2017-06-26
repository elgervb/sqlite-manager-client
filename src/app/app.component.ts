import { Component, ViewEncapsulation, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DatabaseListService } from './database-list/database-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  @HostBinding('class.parent') someField = true;

  title = 'Components';
  overlay = false;

  private databaseNames$: Observable<string[]>;

  constructor(
    private databaseListService: DatabaseListService
  ) {}

  closed() {
    console.log('overlay closed');
  }

  ngOnInit() {
    this.databaseNames$ = this.databaseListService.getDatabaseNames();
  }

  showOverlay(): boolean {
    return this.overlay = true;
  }
  closeOverlay(): void {
    this.overlay = false;
  }
}
