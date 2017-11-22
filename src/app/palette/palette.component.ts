import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaletteColor } from '../shared/interfaces/palette-color.interface';
import { ColorService } from '../shared/services/color.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

  palette: PaletteColor[];
  selectedColor: PaletteColor;
  @Output() selectColor: EventEmitter<PaletteColor> = new EventEmitter();

  constructor(
    private colorService: ColorService,
  ) { }

  ngOnInit() {
    this.palette = this.colorService.getPaletteByName('c64');
  }

  colorClick(id: number) {
    const colorThatWasClicked = this.colorService.getColorById(id, this.palette);
    this.selectedColor = colorThatWasClicked;
    this.selectColor.emit(colorThatWasClicked);
  }

  isColorSelected(colorId: number) {
    if (this.selectedColor === null || this.selectedColor === undefined) {
      return false;
    }
    return this.selectedColor.id === colorId;
  }

}
