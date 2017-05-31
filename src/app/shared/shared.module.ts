import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    OffcanvasComponent,
    OverlayComponent,
    PopoverComponent,
    SpinnerComponent
  ],
  declarations: [OffcanvasComponent, SpinnerComponent, OverlayComponent, PopoverComponent]
})
export class SharedModule { }
