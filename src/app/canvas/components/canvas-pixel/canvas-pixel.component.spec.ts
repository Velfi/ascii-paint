import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPixelComponent } from './canvas-pixel.component';

describe('ColorButtonComponent', () => {
  let component: CanvasPixelComponent;
  let fixture: ComponentFixture<CanvasPixelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasPixelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasPixelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
