import { Component, OnInit } from '@angular/core';

import * as AuthReducer from '@store/auth/reducers';
import {Store} from '@ngrx/store';
import {SignOut} from '@store/auth/actions';
import {AuthFacade} from '@app/facades/auth/authFacade';
import {MatDialog} from '@angular/material';
import {CreateSchoolComponent} from '@pages/layout/school/create-school/create-school.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  email: string;
  name: string;
  schools = [];
  constructor(
    public dialog: MatDialog,
    private authFacade: AuthFacade,
    private authStore: Store<AuthReducer.AuthState>
  ) { }

  ngOnInit() {
    this.authStore.select('auth').subscribe(
      (val) => {
        console.log(val, 'user component');
        if (val.user) {
          this.name = val.user.name;
          this.email = val.user.email;
          this.schools = val.user.schools ? val.user.schools : [];
        }
      }
    );
  }

  onLogout() {
    this.authStore.dispatch(new SignOut(this.authFacade));
  }

  onSelectedSchools(val) {
    console.log(val, 'school was selected');
  }


  openCreateModal() {
    const dialogRef = this.dialog.open(CreateSchoolComponent);
    dialogRef.afterClosed().subscribe(result => {
      dialogRef.close();
    });
  }

}
