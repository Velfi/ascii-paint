import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './canvas.component';
import { CanvasPixelComponent } from './components/canvas-pixel/canvas-pixel.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CanvasComponent,
    CanvasPixelComponent,
  ],
  exports: [
    CanvasComponent,
    CanvasPixelComponent,
  ]
})
export class CanvasModule { }
