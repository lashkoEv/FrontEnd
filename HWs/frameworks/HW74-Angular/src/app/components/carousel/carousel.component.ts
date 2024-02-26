import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit, OnChanges {
  private images = [
    'https://hortology.co.uk/cdn/shop/files/Dracaena-Compacta-Strelitzia-Raindrop-Planters-Stone_1600x.jpg?v=1673963040',
    'https://hortology.co.uk/cdn/shop/files/Dracaena-Janet-Craig-Lind-Raindrop-Planters-Stone_1600x.jpg?v=1673963592',
    'https://hortology.co.uk/cdn/shop/files/Sansevieria-Laurentii-Dracaena-Compacta-Raindrop-Planters-Stone_1600x.jpg?v=1673964190',
  ];

  private index: number;
  private direction: 'left' | 'right';
  private isVisible: boolean;

  constructor() {
    this.index = 0;
    this.direction = 'right';
    this.isVisible = false;
    this.startInterval();
  }

  getVisibility() {
    return this.isVisible;
  }

  private startInterval() {
    setInterval(() => {
      console.log(this.index);
      if (this.direction === 'right') this.index++;
      else this.index--;

      if (this.index > this.images.length - 1) this.index = 0;
      if (this.index < 0) this.index = this.images.length - 1;
    }, 3000);
  }

  setLeftDirection() {
    this.isVisible = !this.isVisible;

    setTimeout(() => {
      this.direction = 'left';
      this.isVisible = !this.isVisible;
    }, 2000);
  }

  setRightDirection() {
    this.isVisible = !this.isVisible;

    setTimeout(() => {
      this.direction = 'right';
      this.isVisible = !this.isVisible;
    }, 2000);
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log('onChanges (carousel)');
  }

  getImage() {
    return this.images[this.index];
  }
}
