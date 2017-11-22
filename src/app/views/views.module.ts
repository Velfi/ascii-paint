import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CanvasModule } from '../canvas/canvas.module';
import { PaletteModule } from '../palette/palette.module';
import { BrushboxModule } from '../brushbox/brushbox.module';

import { PaintModeComponent } from './paint-mode/paint-mode.component';
import { ColorService } from '../shared/services/color.service';

const viewRoutes: Routes = [
  {
    path: '',
    redirectTo: 'paint',
    pathMatch: 'full',
  },
  {
    path: 'paint',
    component: PaintModeComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(viewRoutes),
    CommonModule,
    CanvasModule,
    PaletteModule,
    BrushboxModule,
  ],
  declarations: [
    PaintModeComponent,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ColorService,
  ]
})
export class ViewsModule { }
