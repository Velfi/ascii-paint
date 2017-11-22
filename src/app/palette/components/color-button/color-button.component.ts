import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css']
})
export class ColorButtonComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() color: string;
  @Input() selected: boolean;
  @Output() onClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.name = this.name ? this.name : 'This color is unnamed';
    this.color = this.color ? this.color : '#ff00ff';
    this.selected = false;
  }

  _onClick() {
    this.onClick.emit(this.id);
  }
}
