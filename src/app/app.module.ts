import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProgressComponent } from './progress/progress.component';
import { SliderComponent } from './slider/slider.component';
import { HistogramComponent } from './histogram/histogram.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    SliderComponent,
    HistogramComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
