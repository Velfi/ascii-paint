import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintModeComponent } from './paint-mode.component';

describe('PaintModeComponent', () => {
  let component: PaintModeComponent;
  let fixture: ComponentFixture<PaintModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
