import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StorageService } from './storage/storage.service';

@NgModule({
  providers: [
    StorageService
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
