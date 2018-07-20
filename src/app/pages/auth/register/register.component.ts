import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AuthService} from '@services/auth/auth.service';
import * as SpinnerReducer from '@store/spinner/reducers';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {StartSpinner, StopSpinner} from '@store/spinner/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private spinnerStore: Store<SpinnerReducer.SpinnerState>
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'confirm_password': new FormControl(null, [Validators.required, this.confirmedPassword.bind(this)]),
    });
  }

  confirmedPassword(control: FormControl): {[s: string]: boolean} {
    if (this.signupForm && this.signupForm.get('password').value !== this.signupForm.get('confirm_password').value) {
      return {'confirmedPassword': true};
    } else {
      return null;
    }
  }

  register() {
    console.log(this.signupForm);
    this.spinnerStore.dispatch(new StartSpinner());
    this.authService.register({name: this.signupForm.get('name').value,
                              email: this.signupForm.get('email').value,
                              password: this.signupForm.get('password').value,
                              password_confirmation: this.signupForm.get('confirm_password').value})
      .subscribe(
        resp => {
          this.spinnerStore.dispatch(new StopSpinner());
          this.router.navigate(['/auth/login']);
        }
      )
  }
}
