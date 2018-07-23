import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {
  @Input() insertingTime: Subject<boolean>;
  @Input() insertingMonth: Subject<string>;
  @Input() insertingSchedule = new EventEmitter<object>();

  @Output() selectedDay = new EventEmitter<string>();

  numberOfDays = [];
  schedule = {};
  currentElement: any;

  subscribes = [];

  constructor() { }

  ngOnInit() {
    this.getMonthDays();
    this.subscribes.push(this.insertingTime.subscribe(
      resp => {
        if (this.currentElement) {
          if (resp) {
            this.currentElement.classList.add('active-border');
          }  else {
          this.clearCalendar(false);
         }
        }
    })
    );

    this.subscribes.push(this.insertingMonth.subscribe(
      (resp: any) => {
        if (resp > 0 && resp <= 12) {
            this.clearCalendar();
            this.getMonthDays(resp);
        }
      }
    )
    );

    this.subscribes.push(this.insertingSchedule.subscribe(
      (resp) => {
        this.schedule = resp;
      }
      )
    );
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  onSelectDay(event) {
    const currentElement = event.target.closest('li');
    if (currentElement) {
      this.currentElement = currentElement;
      this.selectedDay.emit(this.currentElement.innerText);
      this.clearCalendar(false);
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
    return !!(this.schedule && this.schedule[day + 1]);
  }

  clearCalendar(clearBorder = true) {
    const days = document.getElementsByClassName('days').item(0)
      .getElementsByTagName('li');
      Object.keys(days).forEach((item) => {
        if ( typeof days[item] !== 'undefined') {
          days[item].classList.remove('selectedCalendarItem');
          if (clearBorder) {
            days[item].classList.remove('active-border');
          }
        }
      });
  }

  unsubscribe() {
    this.subscribes.map( subscr => {
      subscr.unsubscribe();
    });
  }

}
