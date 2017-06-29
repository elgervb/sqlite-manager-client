import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PagevisibilityService {
  public visiblity$: Observable<boolean>;

  private subject: BehaviorSubject<boolean> = new BehaviorSubject(true);

  private hidden;

  constructor() {
    this.visiblity$ = this.subject.asObservable();

    let visibilityChange;

    if ('hidden' in document) {
      this.hidden = 'hidden';
      visibilityChange = 'visibilitychange';
    } else if ('mozHidden' in  document) {
      this.hidden = 'mozHidden';
      visibilityChange = 'mozvisibilitychange';
    } else if ('msHidden' in document) {
      this.hidden = 'msHidden';
      visibilityChange = 'msvisibilitychange';
    } else if ('webkitHidden' in document) {
      this.hidden = 'webkitHidden';
      visibilityChange = 'webkitvisibilitychange';
    }

    document.addEventListener(visibilityChange, this.handleVisibilityChange.bind(this), false);
    this.handleVisibilityChange();
  }

  isVisible(): boolean {
    return !document[this.hidden];
  }

  handleVisibilityChange() {
    this.subject.next(this.isVisible());
  }

}
