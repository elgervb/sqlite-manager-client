import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
