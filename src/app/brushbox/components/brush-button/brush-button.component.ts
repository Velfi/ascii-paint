import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Brush } from '../../../shared/interfaces/brush.interface';

@Component({
  selector: 'app-brush-button',
  templateUrl: './brush-button.component.html',
  styleUrls: ['./brush-button.component.css']
})
export class BrushButtonComponent implements OnInit {

  @Input() brush: Brush;
  @Input() selected: boolean;
  @Output() onClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.selected = false;
  }

  _onClick() {
    this.onClick.emit(this.brush.id);
  }
}
