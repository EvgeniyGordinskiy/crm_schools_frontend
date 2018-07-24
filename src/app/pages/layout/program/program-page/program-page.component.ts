import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProgramCreateComponent} from '../program-create/program-create.component';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-program-page',
  templateUrl: './program-page.component.html',
  styleUrls: ['./program-page.component.scss'],
})
export class ProgramPageComponent implements OnInit {
  moveMonthsCarousel: Subject<string> = new Subject();
  moveDaysCarousel: Subject<string> = new Subject();
  moveIncomesCarousel: Subject<string> = new Subject();
  moveStudentsCarousel: Subject<string> = new Subject();

  currentYear: number;
  incomes = [
    {
      month: 'Jan',
      amount: 970
    },
    {
      month: 'Feb',
      amount: 1500
    },
    {
      month: 'Mar',
      amount: 500
    },
    {
      month: 'Apr',
      amount: 1000
    },
    {
      month: 'May',
      amount: 1300
    },
    {
      month: 'June',
      amount: 1100
    },
    {
      month: 'July',
      amount: 700
    },
    {
      month: 'Aug',
      amount: 750
    },
    {
      month: 'Sept',
      amount: 900
    },
    {
      month: 'Oct',
      amount: 1500
    },
    {
      month: 'Nov',
      amount: 1500
    },
    {
      month: 'Dec',
      amount: 1000
    },
  ];
  students = [
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    {
      first_name: 'first_name',
      last_name: 'last_name',
    }
  ];

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
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
    },
    {
      number: 22,
      name: 'T'
    },
    {
      number: 23,
      name: 'W'
    },
    {
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
    },
    {
      number: 29,
      name: 'T'
    },
    {
      number: 31,
      name: 'W'
    },
    {
      number: 32,
      name: 'T'
    },
  ];


  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.currentYear = (new Date()).getFullYear();
  }

  getHeightForAmountGraph(amount: number) {
    const height = amount * 0.075;
    return height > 140 ? 140 : height;
  }

  onSelectCarouselContentItem(event) {
    const contentItems = document.getElementsByClassName('carousel-content-item');
    Object.keys(contentItems).forEach( (carouselItem) => {
      if (carouselItem) {
        contentItems[carouselItem].classList.remove('selectedCarouselItem');
      }
    });
    let currentElement = event.target.closest('.carousel-content-item');
    if (currentElement) {
      currentElement.classList.add('selectedCarouselItem');
    }
  }

  openCreateModal() {
    const dialogRef = this.dialog.open(ProgramCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      dialogRef.close();
    });
  }

}
