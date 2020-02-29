/*
 * Histogram build upon slider example below
 *
 * Custom SVG control by Daz
 * https://medium.com/@dazcyril/custom-angular-controls-with-svg-efeeb75922b
 */
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})

export class HistogramComponent implements OnInit, OnChanges {

  @Input() name = '';
  @Input() value:number;
  @Input() data:number[];
  @Input() modeIndex = 0;
  @Input() modeValue = 100;

    NUM_INPUT:number = 256
    path:String = ""

    /*
     * default data
     */
  constructor() {
    var triangles:number[] = new Array()

    for(var i=0; i<256; i++){
      var num = i % 100;
      triangles.push(num);
    }
    this.render(triangles);
  }

  ngOnInit() {
    this.modeValue = 0;
    this.modeIndex = 100;
  }

  ngOnChanges(changes: SimpleChanges) {

    var data = changes.data.currentValue;
    if(data != undefined && data.length > 0){
      this.render(data)
    }
  }

  /*
   * Build a histogram
   */
  onHist() {

    var canvas = document.getElementById('myCanvas');
    const canvasW = canvas.getBoundingClientRect().width;
    const canvasH = canvas.getBoundingClientRect().height;
    this.modeValue = 0;
    this.modeIndex = 100;

    var cx = canvas.getContext('2d')!;
    var src = cx.getImageData(0,0, canvasW, canvasH);
    var len = canvasW * canvasH;

    // zero the histogram
    this.data = []
    for (var j=0; j<256; j++)
      this.data[j] = 0;

    // build histogram
    for(var i=0; i<len; i++) {
      var index = i * 4;
      var value = 0
      // RGBA -- just gray scale for now
      for(var k=0; k<3; k++){
        value += src.data[index+k];
      }
      var avg = Math.round(value / 3)
      this.data[avg]++;

        if(this.data[avg] > this.modeValue) {
          this.modeValue = this.data[avg];
          this.modeIndex = avg;
        }
    }
    this.setArray(this.data);
  }

  /*
   * Build a cumulative histogram (curve)
   */
  onCumulate() {
    this.onHist()

    for (var j=1; j<256; j++) {
      this.data[j] += this.data[j-1];
    }
    this.modeValue = this.data[255]
    this.modeIndex = 255
    this.setArray(this.data);
  }

  private render(data: number[]) {
    this.setArray(data)
  }

  private setArray(data:number[]) {
    this.path = "";

    var len:number = data.length;
    if(len > this.NUM_INPUT)
      len = this.NUM_INPUT;

    for(var i=0; i<len; i++) {
      var index = this.NUM_INPUT - i;

      var num = data[i] / this.modeValue * 100.0
      this.path += " M "+ index +", 0 L " + index + "," + num
    }
  }
}
