import {Component, Injectable} from '@angular/core';

// @ngrx
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';

import * as AuthenticateReducer from '@store/auth/reducers';
import {RefreshAuthState, SignOut} from '@store/auth/actions';
import {AuthFacade} from '@app/facades/auth/authFacade';
import {Router} from '@angular/router';
import {PermissionFacade} from '@facades/permission/permissionFacade';
import {User} from '@models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  user: User;
  constructor(
    private router: Router,
    private authStore: Store<AuthenticateReducer.AuthState>,
    private authFacade: AuthFacade,
  ) {
    this.authStore.subscribe(
      (val) => {
        const auth = val.auth;
        if (auth && auth.user) {
          this.user = auth.user;
        }
      }
    );
  }

  beforeRoute() {
    // this.router.navigate(['/auth/emailSent']);
      if (this.router.url === 'auth/login' || this.router.url === 'auth/register') {
        this.authStore.dispatch(new SignOut(this.authFacade));
      }
     if (this.authFacade.pageNeedAuth() && !PermissionFacade.checkPermissionsToAccessPage(this.router.url.split('?')[0], this.user)) {
       if (AuthFacade.getAuthStatus()) {
         this.router.navigate(['/home']);
       } else {
         this.router.navigate(['/auth/login']);
       }
     }
    this.authFacade.checkAuthStatusAndRedirect();
    this.authStore.dispatch(new RefreshAuthState());
  }
}
