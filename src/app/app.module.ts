import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { CanvasModule } from './canvas/canvas.module';
import { PaletteModule } from './palette/palette.module';
import { BrushboxModule } from './brushbox/brushbox.module';
import { ColorService } from './shared/services/color.service';

const appRoutes: Routes = [
  {
    path: '*',
    redirectTo: 'views'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    ViewsModule,
  ],
  providers: [
    ColorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
