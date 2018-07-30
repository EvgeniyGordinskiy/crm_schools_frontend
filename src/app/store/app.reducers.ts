
import * as fromAuth from '@store/auth/reducers';
import * as fromSpinner from '@store/spinner/reducers';

export interface AppState {
  auth: fromAuth.State;
  spinner: fromSpinner.State;
}

export const reducers = {
  auth: fromAuth.reducer,
  spinner: fromSpinner.reducer,
};
