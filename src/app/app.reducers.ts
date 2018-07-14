
import * as fromAuth from '@store/auth/reducers';

export interface AppState {
  auth: fromAuth.State;
}

export const reducers = {
  auth: fromAuth.reducer
};
