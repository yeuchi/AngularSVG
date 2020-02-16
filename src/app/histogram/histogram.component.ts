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
    @Input() min;
    @Input() max;

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
    this.histogram(triangles);
  }

  ngOnInit() {
    this.min = 0
    this.max = 100
}

  ngOnChanges(changes: SimpleChanges) {

    var data = changes.data.currentValue;
    if(data != undefined && data.length > 0){
      this.histogram(data)
    }
  }

  private histogram(data: number[]) {
    this.setArray(data)
  }

  private setArray(data:number[]) {
    this.path = "";

    var len:number = data.length;
    if(len > this.NUM_INPUT)
      len = this.NUM_INPUT;

    for(var i=0; i<len; i++) {
      var index = this.NUM_INPUT - i;

      var num = data[i]
      if(num > this.max)
        num = this.max

      this.path += " M "+ index +", 0 L " + index + "," + num
    }
/*
    for(var i=this.NUM_INPUT; i>=1; i--){
      var n = this.NUM_INPUT - i
      if(n > this.max)
        n = this.max;
      this.path += " M "+ i +", 0 L " + i + "," + n
    }
  */
  }
}
