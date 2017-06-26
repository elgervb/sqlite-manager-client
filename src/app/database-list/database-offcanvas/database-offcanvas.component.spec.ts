import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseOffcanvasComponent } from './database-offcanvas.component';

describe('DatabaseOffcanvasComponent', () => {
  let component: DatabaseOffcanvasComponent;
  let fixture: ComponentFixture<DatabaseOffcanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseOffcanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
