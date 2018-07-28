import {Component, inject, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    });
  }

  create() {
    this.schoolService.create({
      name: this.crateSchoolForm.get('name').value,
      description: this.crateSchoolForm.get('description').value,
      address: this.crateSchoolForm.get('address').value
    }).subscribe(
      (resp: {data: {}}) => {
        this.authStore.dispatch(new UpdateAuthUser({schools: resp.data}));
        this.dialog.closeAll();
      }
    );
  }

}
