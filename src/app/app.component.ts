import {Component, Injectable} from '@angular/core';

// @ngrx
import { Store } from '@ngrx/store';

// rxjs
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';

import * as AuthenticateReducer from '@store/auth/reducers';
import {AuthenticateAction, AuthenticatedSuccessAction, RefreshAuthState} from '@store/auth/actions';
import {User} from '@models/user';
import {AuthFacade} from '@app/facades/auth/authFacade';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {

  constructor(
    private router: Router,
    private authStore: Store<AuthenticateReducer.AuthState>,
    private authFacade: AuthFacade,
  ) {
  }

  beforeRoute() {
    this.authFacade.checkAuthStatusAndRedirect();
    this.authStore.dispatch(new RefreshAuthState());
  }
}
