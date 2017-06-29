import { TestBed, inject } from '@angular/core/testing';

import { DesktopnotificationsService } from './desktopnotifications.service';

describe('DesktopnotificationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesktopnotificationsService]
    });
  });

  it('should be created', inject([DesktopnotificationsService], (service: DesktopnotificationsService) => {
    expect(service).toBeTruthy();
  }));
});
