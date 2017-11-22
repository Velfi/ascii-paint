import { Component, OnInit } from '@angular/core';

import { PaletteColor } from '../../shared/interfaces/palette-color.interface';
import { Brush } from '../../shared/interfaces/brush.interface';
import { Pixel } from '../../shared/interfaces/pixel.interface';
import { ColorService } from '../../shared/services/color.service';

@Component({
  selector: 'app-paint-mode',
  templateUrl: './paint-mode.component.html',
  styleUrls: ['./paint-mode.component.css']
})
export class PaintModeComponent implements OnInit {

  currentBrush: Brush;
  currentColor: PaletteColor;
  constructor(
    private colorService: ColorService,
  ) { }

  ngOnInit() {
  }

  colorSelected(color: PaletteColor) {
    this.currentColor = color;
    return;
  }

  brushSelected(brush: Brush) {
    this.currentBrush = brush;
    return;
  }

  pixelClicked(pixel: Pixel) {
    if (this.currentColor === null || this.currentColor === undefined) {
      throw new Error('Choose a color before painting a pixel');
    }
    pixel.background = this.colorService.paletteColorToHex(this.currentColor);
  }

}
