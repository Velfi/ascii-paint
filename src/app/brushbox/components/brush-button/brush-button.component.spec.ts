import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushButtonComponent } from './brush-button.component';

describe('ColorButtonComponent', () => {
  let component: BrushButtonComponent;
  let fixture: ComponentFixture<BrushButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrushButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrushButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
