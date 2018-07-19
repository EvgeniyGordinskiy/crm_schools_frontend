import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProgramCreateComponent} from '../program-create/program-create.component';

@Component({
  selector: 'app-program-page',
  templateUrl: './program-page.component.html',
  styleUrls: ['./program-page.component.scss'],
})
export class ProgramPageComponent implements OnInit {
  leftDay = 0;
  leftMonth = 0;
  leftIncome = 0;
  leftStudents = 0;
  displayItemsDays = 7;
  displayItemsMonths = 1;
  displayItemsIncome = 7;
  displayItemsStudents = 7;
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
    private renderer: Renderer2,
    private elRef: ElementRef,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.currentYear = (new Date()).getFullYear();
  }

  carouselToRight(innerDivClass: string, displayItems: number, left: string, margin = 5) {
    console.log(this[left], 'before left');
    if (!this[left] <= 0) {
      let width = this.elRef.nativeElement.querySelector(`.${innerDivClass}`).querySelector('.carousel-content-item').clientWidth + margin;
      console.log(width);
      this[left] += width * displayItems;
      this.renderer.setStyle(this.elRef.nativeElement.querySelector(`.${innerDivClass}`), 'left', this[left] + "px");
    }
  }

  carouselToLeft(innerDivClass: string, displayItems: number, arrayItems, left: string, margin = 5) {
    console.log(this[left], 'before right');
    let width = this.elRef.nativeElement.querySelector(`.${innerDivClass}`).querySelector('.carousel-content-item').clientWidth + margin;
    console.log(width);
    if (Math.abs(this[left]) < arrayItems.length * width - width * displayItems) {
      this[left] -= width * displayItems;
      this.renderer.setStyle(this.elRef.nativeElement.querySelector(`.${innerDivClass}`), 'left', this[left] + "px");
    }
  }

  getHeightForAmountGraph(amount: number) {
    const height = amount * 0.075;
    return height > 140 ? 140 : height;
  }

  onSelectCarouselContentItem(event) {
    for (let carouselItem of document.getElementsByClassName('carousel-content-item')) {
      if (carouselItem) {
        carouselItem.classList.remove("selectedCarouselItem");
      }
    }
    let currentElement = event.target.closest(".carousel-content-item");
    if (currentElement) {
      currentElement.classList.add('selectedCarouselItem');
    }
  }

  openCreateModal() {
    const dialogRef = this.dialog.open(ProgramCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      dialogRef.close();
      console.log('The dialog was closed');
    });  }

}
