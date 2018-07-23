import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ProgramService} from '@services/program/program.service';

@Component({
  selector: 'app-program-create',
  templateUrl: './program-create.component.html',
  styleUrls: ['./program-create.component.scss']
})
export class ProgramCreateComponent implements OnInit {
  @ViewChild('create_program_wrapper') host: ElementRef;
  @ViewChild('program_name') program_name: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('time') time: ElementRef;
  @ViewChild('teacherName') teacherName;

  moveMonthsCarousel: Subject<string> = new Subject();
  selectingTime: Subject<boolean> = new Subject();
  monthsNumber: Subject<number> = new Subject();
  monthsSchedule: Subject<Object> = new Subject();

  currentMonth = new Date().getMonth() + 1;

  schedule = {};

  selectedDay = '';

  errors = {};

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

  toDays = [
    {
      name: 'Today',
      id: 'id'
    },
    {
      name: 'Tomorrow',
      id: 'id'
    }
  ];

  teachers = [
    {
      id: 1,
      name: 'Teacher 1'
    },
    {
      id: 2,
      name: 'Teacher 2'
    },
  ];

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
    private programService: ProgramService,
  ) {}

  ngOnInit() {
    const bodyHeight = document.getElementsByTagName('body').item(0).clientHeight;
    if (bodyHeight < 800) {
      this.renderer.setStyle(this.host.nativeElement, 'height', bodyHeight - 50 + 'px');
    }
  }

  onCreate(): void {
    if (this.program_name.nativeElement.value < 0) {
      this.errors['program_name'] = true;
    }
    if (!this.teacherName.value) {
      this.errors['teacherName'] = true;
    }
    // this.program
    console.log(this.errors);
  }

  cancel() {

  }

  onTimeBlur(value) {
    if (value.length > 0) {
      this.selectingTime.next(true);
      if(this.selectedDay.length > 0) {
        this.setSchedule(value);
      }
    } else {
      this.selectingTime.next(false);
      delete this.schedule[this.selectedDay];
    }
  }

  onSelectedDay(value) {
    if (value) {
      this.selectedDay = value;
      if (this.schedule && this.schedule[this.currentMonth] && this.schedule[this.currentMonth][this.selectedDay]) {
          this.time.nativeElement.value = this.schedule[this.currentMonth][this.selectedDay];
      }else {
        this.time.nativeElement.value = '';
      }
    }
  }

  onMonthToRight() {
    this.currentMonth -= 1;
    this.time.nativeElement.value = '';
    this.monthsNumber.next(this.currentMonth);
    this.moveMonthsCarousel.next('right');
    this.monthsSchedule.next(this.schedule[this.currentMonth])
  }

  onMonthToLeft() {
    this.currentMonth += 1;
    this.time.nativeElement.value = '';
    this.monthsNumber.next(this.currentMonth );
    this.moveMonthsCarousel.next('left');
    this.monthsSchedule.next(this.schedule[this.currentMonth])
  }

  setSchedule(time) {
    if (!this.schedule[this.currentMonth]) {
      this.schedule[this.currentMonth] = {};
    }
    this.schedule[this.currentMonth][this.selectedDay] = time;
  }

}
