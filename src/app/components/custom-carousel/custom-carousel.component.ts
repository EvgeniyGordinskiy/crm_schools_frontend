import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements OnInit, AfterViewInit {
  @Input() innerDivClass: string;
  @Input() displayItems: number;
  @Input() margin: number = 5;
  @Input() arrayItems: Array;
  @Input() startPage: number = 1;
  @Input() move: Subject<string>;

  left= 0;

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
  ) { }

  ngOnInit() {
    this.move.subscribe(v => {
      if (v === 'right') {
        this.carouselToRight();
      }
      if (v === 'left') {
        this.carouselToLeft();
      }
    });
  }

  ngAfterViewInit() {
    if (this.elRef.nativeElement.querySelector(`.${this.innerDivClass}`).querySelector('.carousel-content-item') && this.startPage > 1) {
      let width = this.elRef.nativeElement.querySelector(`.${this.innerDivClass}`).querySelector('.carousel-content-item').clientWidth + this.margin;
      this.left -=  width * this.displayItems * (this.startPage - 1);
      this.renderer.setStyle(this.elRef.nativeElement.querySelector(`.${this.innerDivClass}`), 'left', this.left + "px");
    }
  }

  carouselToRight() {
    if (!this.left <= 0) {
      let width = this.elRef.nativeElement.querySelector(`.${this.innerDivClass}`).querySelector('.carousel-content-item').clientWidth + this.margin;
      this.left += width * this.displayItems;
      this.renderer.setStyle(this.elRef.nativeElement.querySelector(`.${this.innerDivClass}`), 'left', this.left + "px");
    }
  }

  carouselToLeft() {
    let width = this.elRef.nativeElement.querySelector(`.${this.innerDivClass}`).querySelector('.carousel-content-item').clientWidth + this.margin;
    if (Math.abs(this.left) < this.arrayItems.length * width - width * this.displayItems) {
      this.left -= width * this.displayItems;
      this.renderer.setStyle(this.elRef.nativeElement.querySelector(`.${this.innerDivClass}`), 'left', this.left + "px");
    }
  }

}
