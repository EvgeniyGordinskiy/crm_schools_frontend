import { Action } from '@ngrx/store';

// import type function
import { uniqueType } from '@utils/uniqueType';

// import models
import { User } from '@models/user';
import {AuthService} from '@services/auth/auth.service';
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
  SIGN_UP_SUCCESS: uniqueType('Sign up success')
};

/**
 * Authenticate.
 * @class AuthenticateAction
 * @implements {Action}
 */
export class AuthenticateAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATE;
  constructor(
    public payload: {email: string, password: string, token: string}) {
    AuthService.setToken(payload.token);
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

  constructor(public payload: {authenticated: boolean, user: User}) {}
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
 * Sign out.
 * @class SignOutAction
 * @implements {Action}
 */
export class SignOutAction implements Action {
  readonly type: string = ActionTypes.SIGN_OUT;
  constructor(public payload?: any) {}
}

/**
 * Sign out error.
 * @class SignOutErrorAction
 * @implements {Action}
 */
export class SignOutErrorAction implements Action {
  readonly type: string = ActionTypes.SIGN_OUT_SUCCESS;
  constructor(public payload?: any) {}
}

/**
 * Sign out success.
 * @class SignOutSuccessAction
 * @implements {Action}
 */
export class SignOutSuccessAction implements Action {
  readonly type: string = ActionTypes.SIGN_OUT_SUCCESS;
  constructor(public payload?: any) {}
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
  | SignUpSuccessAction;
