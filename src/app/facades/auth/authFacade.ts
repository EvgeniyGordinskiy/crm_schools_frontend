import {User} from '@models/user';
import {AuthenticateAction, AuthenticatedSuccessAction} from '@store/auth/actions';
import * as AuthenticateReducer from '@store/auth/reducers';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthFacade {
  private static prefix = 'auth_schools_';

  constructor(
    private authStore: Store<AuthenticateReducer.AuthState>,
  ) {}

  static setToken = (token: string) => {
    localStorage.setItem(AuthFacade.prefix + 'token', token);
  }

  static getToken = (): string => {
    return localStorage.getItem(AuthFacade.prefix + 'token');
  }

  static setUser = (user: User) => {
    localStorage.setItem(AuthFacade.prefix + 'user', JSON.stringify(user));
  }

  static getUser = () => {
    return JSON.parse(localStorage.getItem(AuthFacade.prefix + 'user'));
  }

  static setAuthStatus = (status: boolean) => {
    localStorage.setItem(AuthFacade.prefix + 'status', status.toString());
  }

  static getAuthStatus = () => {
    return localStorage.getItem(AuthFacade.prefix + 'status') === 'true';
  }

  updateStore = () => {
    const user = new User(AuthFacade.getUser());
    const token = AuthFacade.getToken();
    const authStatus = AuthFacade.getAuthStatus();
    if (
      user &&
      token &&
      authStatus
    ) {
      this.authStore.dispatch(new AuthenticateAction(token));
      this.authStore.dispatch(new AuthenticatedSuccessAction({authenticated: authStatus, user: user}));
    }
  }

}
