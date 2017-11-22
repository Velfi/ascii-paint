import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushboxComponent } from './brushbox.component';

describe('BrushboxComponent', () => {
  let component: BrushboxComponent;
  let fixture: ComponentFixture<BrushboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrushboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrushboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
