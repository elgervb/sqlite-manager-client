import { TestBed, inject } from '@angular/core/testing';

import { PagevisibilityService } from './pagevisibility.service';

describe('PagevisibilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagevisibilityService]
    });
  });

  it('should be created', inject([PagevisibilityService], (service: PagevisibilityService) => {
    expect(service).toBeTruthy();
  }));
});
