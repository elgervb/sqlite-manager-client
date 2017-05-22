import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  @Input() show = false;
  @Input() effect: string;

  constructor() { }

  ngOnInit() {
    //
  }

  close(): void {
    this.show = false;
  }

}
