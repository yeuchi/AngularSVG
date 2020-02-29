import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProgressComponent } from './progress/progress.component';
import { SliderComponent } from './slider/slider.component';
import { HistogramComponent } from './histogram/histogram.component';
import { ImagecanvasComponent } from './imagecanvas/imagecanvas.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    SliderComponent,
    HistogramComponent,
    ImagecanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
