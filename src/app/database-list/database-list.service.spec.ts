import { TestBed, inject } from '@angular/core/testing';

import { DatabaseListService } from './database-list.service';

describe('DatabaseListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseListService]
    });
  });

  it('should be created', inject([DatabaseListService], (service: DatabaseListService) => {
    expect(service).toBeTruthy();
  }));
});
