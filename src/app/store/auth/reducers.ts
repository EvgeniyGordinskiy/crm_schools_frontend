import { Actions, ActionTypes } from './actions';
import * as fromApp from '@app/store/app.reducers';

import { User } from '@models/user';

export interface AuthState extends fromApp.AppState {
  auth: State;
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
  authenticated: null,
};

/**
 * The reducer function.
 * @function reducer
 * @param {State} state Current state
 * @param {Actions} action Incoming action
 */
export function reducer(state: any = initialState, action: Actions) {
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
        authenticated: action.authStatus,
        user: action.user,
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
export const isAuthenticated = (state: State) => console.log(state);

/**
 * Return the users state
 * @function getAuthenticatedUser
 * @param {State} state
 * @returns {User}
 */
export const getAuthenticatedUser = (state: State) => state.user;

/**
 * Returns the authentication error.
 * @function getAuthenticationError
 * @param {State} state
 * @returns {Error}
 */
export const getAuthenticationError = (state: State) => state.error;

/**
 * Returns the sign out error.
 * @function getSignOutError
 * @param {State} state
 * @returns {Error}
 */
export const getSignOutError = (state: State) => state.error;

/**
 * Returns the sign up error.
 * @function getSignUpError
 * @param {State} state
 * @returns {Error}
 */
export const getSignUpError = (state: State) => state.error;
