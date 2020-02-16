/*
 * Custom SVG control by Daz
 * https://medium.com/@dazcyril/custom-angular-controls-with-svg-efeeb75922b
 */
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit, OnChanges {

  @Input() name = '';
  @Input() value: number;
    @Input() min;
    @Input() max;

  pt: SVGPoint;
  cursorPt: SVGPoint = {x: 0, y: 0} as any;
  dashoffset: number;

  constructor() {
    this.slider(0);
  }

  ngOnInit() {
    this.min = 0
    this.max = 100

    const scaledValue = (50 - this.min) / (this.max - this.min);
    this.cursorPt = {x: 0, y: 128 - (scaledValue * 128)} as any;
}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value.currentValue !== changes.value.previousValue) {
      this.slider(changes.value.currentValue);
    }
  }

  private slider(value: number) {
  }
}
