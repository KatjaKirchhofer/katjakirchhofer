import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  title = 'katjakirchhofer';

  images = ['1.jpg', '2.jpg', '3.jpg'];
  headlines = ['Bring enineering to the next level', 'Born to code', 'Css, JavaScript, Angular'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval( () => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setInterval(() => {
        this.showImage = true; 
      }, 10);
    }, 8000)

  }


}
