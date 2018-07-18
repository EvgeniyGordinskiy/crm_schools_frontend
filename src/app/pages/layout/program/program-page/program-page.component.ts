import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-page',
  templateUrl: './program-page.component.html',
  styleUrls: ['./program-page.component.scss']
})
export class ProgramPageComponent implements OnInit {

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


  constructor() { }

  ngOnInit() {
  }

  carouselToRight()
  {
    console.log('to right');
  }

  carouselToLeft()
  {
    console.log('to Left');
  }

}
