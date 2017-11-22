import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Brush } from '../shared/interfaces/brush.interface';

@Component({
  selector: 'app-brushbox',
  templateUrl: './brushbox.component.html',
  styleUrls: ['./brushbox.component.css']
})
export class BrushboxComponent implements OnInit {

  @Input() brushes: Brush[] = [
    {
      id: 0,
      name: 'Full Block',
      char: '█',
    },
    {
      id: 1,
      name: 'Lowercase A',
      char: 'a',
    },
    {
      id: 2,
      name: 'Lowercase B',
      char: 'b',
    },
    {
      id: 3,
      name: 'Lowercase C',
      char: 'c',
    },
  ];
  @Input() selectedBrush: Brush;
  @Output() selectBrush: EventEmitter<Brush> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  brushClick(id: number) {
    const brushThatWasClicked = this.getBrushById(id, this.brushes);
    this.selectedBrush = brushThatWasClicked;
    this.selectBrush.emit(brushThatWasClicked);
  }

  getBrushById(id: number, brushes: Brush[]) {
    const searchResults = brushes.filter(brush => {
      return id === brush.id;
    });
    const resultCount = searchResults.length;
    if (resultCount === 0) {
      throw new Error('No color found with that ID.');
    } else if (resultCount > 1) {
      throw new Error(`${searchResults.length} results found. Looks like the ID passed is duplicated.`);
    } else {
      return searchResults[0];
    }
  }

  isBrushSelected(colorId: number) {
    if (this.selectedBrush === null || this.selectedBrush === undefined) {
      return false;
    }
    return this.selectedBrush.id === colorId;
  }

}
