import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() position: string;
  @Input() size: string;

  get sizeCssClass() {
    if (this.size) {
      return `spinner--${this.size}`;
    }
    return '';
  }
}
