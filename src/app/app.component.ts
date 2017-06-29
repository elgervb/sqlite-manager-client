import { Component, ViewEncapsulation, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DatabaseListService } from './database-list/database-list.service';
import { PagevisibilityService } from 'app/core/pagevisibility.service';
import { DesktopnotificationsService } from 'app/core/desktopnotifications.service';
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
    private databaseListService: DatabaseListService,
    private visible: PagevisibilityService,
    private desktop: DesktopnotificationsService
  ) {}

  closed() {
    console.log('overlay closed');
  }

  ngOnInit() {
    this.databaseNames$ = this.databaseListService.getDatabaseNames();

    this.visible.visiblity$.subscribe((visible: boolean) => {
      document.title = visible ? 'visible' : 'hidden';
      if (!visible) { this.showNotification('window is hidden'); }
    });

  }

  showNotification(message): void {
    const notification = this.desktop.create(message);
    notification.onclick = (event) => {
      location.href = 'http://elgervanboxtel.nl';
      window.focus();
      notification.close();
    };
  }

  showOverlay(): boolean {
    return this.overlay = true;
  }
  closeOverlay(): void {
    this.overlay = false;
  }
}
