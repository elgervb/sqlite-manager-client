import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  /**
   * Whether or not to show the overlay
   */
  @Input() show = false;
  /**
   * Any valid class name for in effect
   */
  @Input() effect: string;
  /**
   * Close overlay when pressing ESC key
   */
  @Input() escClose = true;
  /**
   * Callback for onClose
   */
  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //
  }

  @HostListener('document:keyup.esc', ['$event']) onKeyUp($event: KeyboardEvent) {
    this.close();
  }

  close(): void {
    this.show = false;
    this.onClose.emit();
  }

}
