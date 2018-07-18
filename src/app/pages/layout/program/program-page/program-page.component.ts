import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-program-page',
  templateUrl: './program-page.component.html',
  styleUrls: ['./program-page.component.scss'],
  animations: [
    trigger('carouselsMoves', [
      state('toTheLeft', style({
        right: ProgramPageComponent.right + 'px'
      })),
      state('toTheRight',   style({
        left: ProgramPageComponent.left + 'px'
      })),
      transition('toTheLeft => toTheRight', animate('100ms ease-in')),
      transition('toTheRight => toTheLeft', animate('100ms ease-out'))
    ])
  ]
})
export class ProgramPageComponent implements OnInit {
  static left = 0;
  static right = 0;
  widthOneItem = 26;
  countOfItems = 7;
  timetable = [
    {
      number: 13,
      name: 'M'
    },
    {
      number: 14,
      name: 'T'
    },
    {
      number: 15,
      name: 'W'
    },
    {
      number: 16,
      name: 'T'
    },
    {
      number: 17,
      name: 'F'
    },
    {
      number: 18,
      name: 'S'
    },
    {
      number: 19,
      name: 'S'
    },
    {
      number: 21,
      name: 'M'
    },{
      number: 22,
      name: 'T'
    },{
      number: 23,
      name: 'W'
    },{
      number: 24,
      name: 'T'
    },
    {
      number: 25,
      name: 'F'
    },
    {
      number: 26,
      name: 'S'
    },
    {
      number: 27,
      name: 'S'
    },
    {
      number: 28,
      name: 'M'
    },{
      number: 29,
      name: 'T'
    },{
      number: 31,
      name: 'W'
    },{
      number: 32,
      name: 'T'
    },
  ];

  timetableCarouselPosition = 'disable';

  constructor() { }

  ngOnInit() {
  }

  carouselToRight() {
    this.timetableCarouselPosition = 'toTheRight';
  }

  carouselToLeft() {
    this.timetableCarouselPosition = 'toTheLeft';
  }

}
