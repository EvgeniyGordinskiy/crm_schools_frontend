import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() insertingTime: Subject<boolean>;
  @Input() insertingMonth: Subject<string>;
  @Input() insertingSchedule = new EventEmitter<object>();

  @Output() selectedDay = new EventEmitter<string>();

  numberOfDays = [];
  schedule = {};
  currentElement: any;

  constructor() { }

  ngOnInit() {
    this.getMonthDays();
    this.insertingTime.subscribe(
      resp => {
        if (this.currentElement) {
          if (resp) {
            this.currentElement.classList.add('active-border');
          }  else {
          this.currentElement.classList.remove("active-border");
         }
        }
    });

    this.insertingMonth.subscribe(
      (resp: number) => {
        if(resp > 0 && resp <= 12) {
            this.clearCalendar();
            this.getMonthDays(resp);
        }
      }
    );

    this.insertingSchedule.subscribe(
      (resp) => {
        if (resp) {
          this.schedule = resp;
        }
        console.log(resp);
      }
    )
  }

  onSelectDay(event) {
    const currentElement = event.target.closest('li');
    if (currentElement) {
      this.currentElement = currentElement;
      this.selectedDay.emit(this.currentElement.innerText);
      this.clearCalendar();
      currentElement.classList.add('selectedCalendarItem');
    }
  }

  getMonthDays(month: any = false) {
    let date = new Date();
    if ( !month || !month > 0 ) {
      month = date.getMonth() + 1;
    }
    console.log(month);
    month = new Date(date.getFullYear(), month, 0);
    const days = month.getDate();
    if (!isNaN(days)) {
      this.numberOfDays =  Array.from(Array(days).keys());
    }
  }

  isDayActive(day) {
    return this.schedule && this.schedule[day + 1];
  }

  clearCalendar() {
    for (let calendarItem of document.getElementsByClassName('days')[0].getElementsByTagName('li')) {
      if (calendarItem) {
        calendarItem.classList.remove("selectedCalendarItem");
        calendarItem.classList.remove("active-border");
      }
    }
  }

}
