import { Component, OnInit } from '@angular/core';

// @ngrx
import { Store } from '@ngrx/store';

// rxjs
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import * as SpinnerReducer from '@store/spinner/reducers';

@Component({
  selector: 'app-main-spinner',
  templateUrl: './main-spinner.component.html',
  styleUrls: ['./main-spinner.component.scss']
})
export class MainSpinnerComponent implements OnInit {
  private status = false;
  constructor(
    private store: Store<SpinnerReducer.SpinnerState>
  ) {
    this.store.select('spinner')
      .subscribe(value => {
        if (typeof value !== 'undefined') {
          this.status = value.running;
        }
      });
  }

  ngOnInit() {
  }

}
