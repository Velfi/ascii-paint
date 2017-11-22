import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaletteComponent } from './palette.component';
import { ColorButtonComponent } from './components/color-button/color-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaletteComponent,
    ColorButtonComponent,
  ],
  exports: [
    PaletteComponent,
    ColorButtonComponent,
  ]
})
export class PaletteModule { }
