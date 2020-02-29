/*
 * Image canvas
 */
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-imagecanvas',
  templateUrl: './imagecanvas.component.html',
  styleUrls: ['./imagecanvas.component.css']
})

export class ImagecanvasComponent implements OnInit {

  @Input() public width = 400;
  @Input() public height = 256;


    /*
     * default data
     */
  constructor() {

  }

  ngOnInit():void {
      var canvas = document.getElementById('myCanvas');
      var cx = canvas.getContext('2d')!;
      let image = new Image();
/*
      cx.lineWidth = 3;
      cx.lineCap = 'round';
      cx.strokeStyle = '#000'; */
      image.onload = ()=> {
          cx.drawImage(image, 0, 0, this.width, this.height);
      }
      image.src = "./assets/img/genenMarc.jpeg";

  }
}
