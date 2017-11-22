import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pixel } from '../../../shared/interfaces/pixel.interface';

@Component({
  selector: 'app-canvas-pixel',
  templateUrl: './canvas-pixel.component.html',
  styleUrls: ['./canvas-pixel.component.css']
})
export class CanvasPixelComponent implements OnInit {

  @Input() info: Pixel;
  @Output() onClick: EventEmitter<Pixel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  _onClick() {
    this.onClick.emit(this.info);
  }
}
