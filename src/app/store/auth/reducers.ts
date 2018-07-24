import { Actions, ActionTypes } from './actions';
import * as fromApp from '@app/store/app.reducers';

import { User } from '@models/user';
import {ActionInterface} from '@app/interfaces/action.interface';
import {isArray} from 'util';
import {AuthFacade} from '@facades/auth/authFacade';

export interface AuthState extends fromApp.AppState {
  authenticated: false;
  error?: string;
  user?: User;
}

/**
 * The state.
 * @interface State
 */
export interface State {
  authenticated: boolean;
  error?: string;
  user?: User;
}

/**
 * The initial state.
 */
const initialState: State = {
  authenticated: false,
};

/**
 * The reducer function.
 * @function reducer
 * @param {State} state Current state
 * @param {Actions} action Incoming action
 */
export function reducer(state: any = initialState, action: ActionInterface) {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE:
      return {
        ...state,
        error: false,
        loading: true
      };

    case ActionTypes.AUTHENTICATED_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload.error.message,
        loaded: true
      };

    case ActionTypes.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        authenticated: action.payload.authenticated,
        loaded: true,
        user: action.payload.user
      };

    case ActionTypes.AUTHENTICATE_ERROR:
    case ActionTypes.SIGN_UP_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      };

    case ActionTypes.AUTHENTICATE_SUCCESS:
    case ActionTypes.SIGN_UP_SUCCESS:
      const user: User = action.payload.user;
      // verify user is not null
      if (user === null) {
        return state;
      }

      return {
        ...state,
        authenticated: true,
        error: undefined,
        loading: false,
        user: user
      };
      case ActionTypes.UPDATE_AUTH_USER:
        const properties = action.payload;
          Object.keys(properties).map(prop => {
            switch (prop) {
              case 'schools':
                state.user[prop].push(properties[prop]);
                break;
              case 'permissions':
                break;
              default:
                state.user[prop] = properties[prop];
                break;
            }
          });
          AuthFacade.setUser(state.user);
          console.log(state);
      return state;

    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        authenticated: false,
        error: undefined,
        user: undefined
      };

    case ActionTypes.SIGN_UP:
      return {
        ...state,
        authenticated: false,
        error: undefined,
        loading: true
      };

      case ActionTypes.REFRESH_AUTH_STATE:
      return {
        ...state,
        authenticated: action.payload.authStatus,
        user: action.payload.user,
        error: undefined,
        loading: true
      };

    default:
      return state;
  }
}

/**
 * Returns true if the user is authenticated.
 * @function isAuthenticated
 * @param {State} state
 * @returns {boolean}
 */
export const isAuthenticated = (state: AuthState) => console.log(state);

/**
 * Return the users state
 * @function getAuthenticatedUser
 * @param {State} state
 * @returns {User}
 */
export const getAuthenticatedUser = (state: AuthState) => state.user;

/**
 * Returns the authentication error.
 * @function getAuthenticationError
 * @param {State} state
 * @returns {Error}
 */
export const getAuthenticationError = (state: AuthState) => state.error;

/**
 * Returns the sign out error.
 * @function getSignOutError
 * @param {State} state
 * @returns {Error}
 */
export const getSignOutError = (state: AuthState) => state.error;

/**
 * Returns the sign up error.
 * @function getSignUpError
 * @param {State} state
 * @returns {Error}
 */
export const getSignUpError = (state: AuthState) => state.error;
