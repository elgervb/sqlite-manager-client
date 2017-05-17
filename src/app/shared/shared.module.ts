import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    OffcanvasComponent,
    SpinnerComponent
  ],
  declarations: [OffcanvasComponent, SpinnerComponent]
})
export class SharedModule { }
