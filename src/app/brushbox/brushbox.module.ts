import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrushboxComponent } from './brushbox.component';
import { BrushButtonComponent } from './components/brush-button/brush-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BrushboxComponent,
    BrushButtonComponent,
  ],
  exports: [
    BrushboxComponent,
    BrushButtonComponent,
  ]
})
export class BrushboxModule { }
