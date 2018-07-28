import {Component, inject, Injectable, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {SchoolService} from '@services/school/school.service';
import {Store} from '@ngrx/store';
import * as AuthReducer from '@store/auth/reducers';
import {UpdateAuthUser} from '@store/auth/actions';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.scss']
})
@Injectable()
export class CreateSchoolComponent implements OnInit {

  crateSchoolForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    private schoolService: SchoolService,
    private authStore: Store<AuthReducer.AuthState>
  ) { }

  ngOnInit() {
    this.crateSchoolForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null),
      'address': new FormControl(null),
      'phone': new FormControl(null, [Validators.required,  this.checkLimit(12, 12)]),
    });
  }

  checkLimit(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value !== null && (c.value.length < min || c.value.length > max)) {
        return {'range': true};
      }
      return null;
    };
  }

  create() {
    this.schoolService.create({
      name: this.crateSchoolForm.get('name').value,
      description: this.crateSchoolForm.get('description').value,
      address: this.crateSchoolForm.get('address').value,
      phone: this.crateSchoolForm.get('phone').value
    }).subscribe(
      (resp: {data: {}}) => {
        this.authStore.dispatch(new UpdateAuthUser({schools: resp.data}));
        this.dialog.closeAll();
      }
    );
  }

}
