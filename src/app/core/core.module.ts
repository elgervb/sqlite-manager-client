import { NgModule, Optional, SkipSelf } from '@angular/core';

import { PagevisibilityService } from './pagevisibility.service';
import { DesktopnotificationsService } from './desktopnotifications.service';

@NgModule({
  providers: [
    PagevisibilityService,
    DesktopnotificationsService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
