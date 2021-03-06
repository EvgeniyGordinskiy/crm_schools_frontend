import {ActionInterface  as Action} from '@app/interfaces/action.interface';
// @ngrx
import { Store } from '@ngrx/store';

// rxjs
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';

import * as AuthenticateReducer from '@store/auth/reducers';

// import type function
import { uniqueType } from '@utils/uniqueType';

// import models
import { User } from '@models/user';
import {AuthFacade} from '@app/facades/auth/authFacade';
import {OnInit} from '@angular/core';

export const ActionTypes = {
  AUTHENTICATE: uniqueType('Authenticate'),
  AUTHENTICATE_ERROR: uniqueType('Authentication error'),
  AUTHENTICATE_SUCCESS: uniqueType('Authentication success'),
  AUTHENTICATED: uniqueType('Authenticated'),
  AUTHENTICATED_ERROR: uniqueType('Authenticated error'),
  AUTHENTICATED_SUCCESS: uniqueType('Authenticated success'),
  SIGN_OUT: uniqueType('Sign off'),
  SIGN_OUT_ERROR: uniqueType('Sign off error'),
  SIGN_OUT_SUCCESS: uniqueType('Sign off success'),
  SIGN_UP: uniqueType('Sign up'),
  SIGN_UP_ERROR: uniqueType('Sign up error'),
  SIGN_UP_SUCCESS: uniqueType('Sign up success'),
  REFRESH_AUTH_STATE: uniqueType('REFRESH_AUTH_STATE'),
  UPDATE_AUTH_USER: uniqueType('UPDATE_AUTH_USER'),
  TOOGLE_AUTH_USED: uniqueType('TOOGLE_AUTH_USED'),
};

/**
 * Authenticate.
 * @class AuthenticateAction
 * @implements {Action}
 */
export class AuthenticateAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATE;
  constructor(token: string) {
    AuthFacade.setToken(token);
  }
}

/**
 * Checks if user is authenticated.
 * @class AuthenticatedAction
 * @implements {Action}
 */
export class AuthenticatedAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATED;

  constructor(public payload?: {token?: string}) {}
}

/**
 * Authenticated check success.
 * @class AuthenticatedSuccessAction
 * @implements {Action}
 */
export class AuthenticatedSuccessAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATED_SUCCESS;

  constructor(public payload: {authenticated: boolean, user: User}) {
    AuthFacade.setUser(payload.user);
    AuthFacade.setAuthStatus(payload.authenticated);
  }
}

/**
 * Authenticated check error.
 * @class AuthenticatedErrorAction
 * @implements {Action}
 */
export class AuthenticatedErrorAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATED_ERROR;

  constructor(public payload?: any) {}
}

/**
 * Authentication error.
 * @class AuthenticationErrorAction
 * @implements {Action}
 */
export class AuthenticationErrorAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATE_ERROR;

  constructor(public payload?: any) {}
}

/**
 * Authentication success.
 * @class AuthenticationSuccessAction
 * @implements {Action}
 */
export class AuthenticationSuccessAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATE_SUCCESS;

  constructor(public payload: { user: User }) {}
}

/**
 * Sign up.
 * @class SignUpAction
 * @implements {Action}
 */
export class SignUpAction implements Action {
  readonly type: string = ActionTypes.SIGN_UP;
  constructor(public payload: { user: User }) {}
}

/**
 * Sign up error.
 * @class SignUpErrorAction
 * @implements {Action}
 */
export class SignUpErrorAction implements Action {
  readonly type: string = ActionTypes.SIGN_UP_ERROR;
  constructor(public payload?: any) {}
}

/**
 * Sign up success.
 * @class SignUpSuccessAction
 * @implements {Action}
 */
export class SignUpSuccessAction implements Action {
  readonly type: string = ActionTypes.SIGN_UP_SUCCESS;
  constructor(public payload: { user: User }) {}
}

/**
 * Refresh auth status.
 * @class RefreshAuthState
 * @implements {Action}
 */
export class RefreshAuthState implements Action {
  readonly type: string = ActionTypes.REFRESH_AUTH_STATE;
  payload = {
    user: {},
    authStatus: false
  };
  constructor() {
    const userAuth = AuthFacade.getUser();
    const token = AuthFacade.getToken();
    const authStatusAuth = AuthFacade.getAuthStatus();
    this.payload.user = new User(userAuth);
    this.payload.authStatus = authStatusAuth;
  }
}

export class UpdateAuthUser implements Action {
  readonly type: string = ActionTypes.UPDATE_AUTH_USER;
  constructor(public payload: object) {}
}

export class ToggleUsedAuthSocial implements Action {
  readonly type: string = ActionTypes.TOOGLE_AUTH_USED;
  constructor(public payload: {provider: string} ) {}
}

export class SignOut implements Action {
  readonly type: string = ActionTypes.SIGN_OUT;
  constructor(
    private authFacade: AuthFacade
  ) {
      authFacade.endSession();
  }
}

/**
 * Actions type.
 * @type {Actions}
 */
export type Actions
  =
  AuthenticateAction
  | AuthenticatedAction
  | AuthenticatedErrorAction
  | AuthenticatedSuccessAction
  | AuthenticationErrorAction
  | AuthenticationSuccessAction
  | SignUpAction
  | SignUpErrorAction
  | SignUpSuccessAction
  | RefreshAuthState
  | UpdateAuthUser
  | ToggleUsedAuthSocial
  | SignOut;
