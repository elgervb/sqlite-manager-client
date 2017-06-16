import { Component, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @HostBinding('class.parent') someField = true;

  title = 'Components';
  overlay = false;

  closed() {
    console.log('overlay closed');
  }

  showOverlay(): boolean {
    return this.overlay = true;
  }
  overlayClosed(): void {
    this.overlay = false;
  }
}
