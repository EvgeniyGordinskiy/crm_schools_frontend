import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@services/auth/auth.service';


// @ngrx
import { Store } from '@ngrx/store';

// rxjs
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';

// actions
import {AuthenticateAction, AuthenticatedSuccessAction} from '@store/auth/actions';
import * as AuthenticateReducer from '@store/auth/reducers';

// reducers
import {AccountService} from '@services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  signinForm: FormGroup;

  /**
   * Component state.
   * @type {boolean}
   */
  private alive = true;
  constructor(
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService,
    private store: Store<AuthenticateReducer.AuthState>
  ) {
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'password': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
    this.store.select('auth')
      .takeWhile(() => this.alive)
      .subscribe(value => {
        console.log(value, 'from ngOnInit');
      });
  }

  /**
   *  Lifecycle hook that is called when a directive, pipe or service is destroyed.
   * @method ngOnDestroy
   */
  public ngOnDestroy() {
    this.alive = false;
  }

  login(): void {
    this.authService.login({email: this.signinForm.value.email, password: this.signinForm.value.password})
      .subscribe(
        (resp) => {
          if (resp.token) {
            this.store.dispatch(new AuthenticateAction({
              email: this.signinForm.value.email,
              password: this.signinForm.value.password,
              token: resp.token
            }));
            this.accountService.getAccount().subscribe(
              response => {
                  console.log(response);
                  // this.store.dispatch(new AuthenticatedSuccessAction());
              },
              error => {
                console.log(error);
              }
            );
          }
        });
  }

}
