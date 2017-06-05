import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseNavigationComponent } from './database-navigation.component';

describe('DatabaseNavigationComponent', () => {
  let component: DatabaseNavigationComponent;
  let fixture: ComponentFixture<DatabaseNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
