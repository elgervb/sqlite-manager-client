import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //
  }

  close(): void {
    this.show = false;
    this.onClose.emit();
  }

}
