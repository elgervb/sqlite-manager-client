import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent implements OnInit {

  /**
   * Start the component in a closed or open state
   */
  @Input() closed = false;

  constructor() {}

  ngOnInit() {}

  /**
   * Closes the component by sliding it away
   */
  close() {
    this.closed = true;
  }

  open() {
    this.closed = false;
  }
}
