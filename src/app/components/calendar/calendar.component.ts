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
      (resp: any) => {
        if (resp > 0 && resp <= 12) {
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

  getMonthDays(month: any = 0) {
    let date = new Date();
    if (month > 0 ) {
      month = date.getMonth() + 1;
    }
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
    const elements = document.getElementsByClassName('days');
    Object.keys(elements).forEach( (key) => {
      Object.keys(elements[key].getElementsByTagName('li')).forEach((item) => {
        item[key].classList.remove('selectedCalendarItem');
        item[key].classList.remove('active-border');
      });
    });
  }

}
